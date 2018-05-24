<template>
  <div class="search-game">
    <div class="search-title">
      正在检索橙子商城
    </div>

    <div style="margin-bottom: 20px;">
      <div class="search-condition" v-for="(tag,index) in tags" :key="index" @click="unchecked(index)">
        <label class="search-condition-tag">{{tag}}</label><Icon type="close-round"></Icon>
      </div>
    </div>

    <div class="game-search-page">
      <div class="search-game-list">
        <div class="search-header">
          <el-autocomplete v-model="keyword"
                           :fetch-suggestions="search" size="mini"
                           :trigger-on-focus="false"
                           placeholder="请输入关键词" style="width: 320px;">
            <template slot-scope="{item}">
              <div class="name" @click="dropDownMenuClick(item.value)">{{item.value}}</div>
            </template>
          </el-autocomplete>
          <el-button size="mini" type="warning" style="margin-left: 5px" @click="clickSearch">搜索</el-button>
          <div class="search-header-right">
            <label>排序依据</label>
            <el-select size="mini" v-model="sortKey">
              <el-option v-for="item in options" :key="item.sort" :value="item.value" :label="item.sort">
              </el-option>
            </el-select>
          </div>
        </div>

        <template v-if="total > 0">
          <game-cap :games="games"></game-cap>
          <div class="search_page">
            <Page :total="total" show-total size="small" :current="current" :page-size="size" @on-change="pageChange">
            </Page>
          </div>
        </template>
        <template v-else>
          <span class="search-no-record">该查询没有传回任何结果。</span>
        </template>
      </div>

      <div>
        <div class="search-condition-area">
          <span>依标签缩小搜索范围</span>
          <ul>
            <li v-for="i in [0,1,2,3,4,5,6]">
              <Checkbox size="default" v-model="checkBoxs[i].value" @on-change="checked(i)">
                <label>{{checkBoxs[i].name}}</label>
              </Checkbox>
            </li>
          </ul>
        </div>

        <div class="search-condition-area">
          <span>依玩家人数缩小搜索范围</span>
          <ul>
            <li v-for="i in [7,8,9,10]">
              <Checkbox size="default" v-model="checkBoxs[i].value" @on-change="checked(i)">
                <label>{{checkBoxs[i].name}}</label>
              </Checkbox>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gameCap from '@/components/gameCap'
  import autoSearch from '@/components/search/autoSearch'
  export default {
    components: {
      gameCap, autoSearch
    },
    data() {
      return {
        games: [],
        tags: [],
        keyword: '',
        checkBoxs: [
          {name: '动作', value: false},
          {name: '冒险', value: false},
          {name: '休闲', value: false},
          {name: '策略', value: false},
          {name: '角色扮演', value: false},
          {name: '解谜', value: false},
          {name: '开放世界', value: false},
          {name: '多人在线战术竞技', value: false},
          {name: '大型多人在线', value: false},
          {name: '单机多人', value: false},
          {name: '4人单机', value: false},

        ],
        sortKey: '',
        options: [
          {sort: '发行日期', value: 'date'},
          {sort: '名称', value: 'name'},
          {sort: '价格从低到高', value: 'price'},
          {sort: '价格从高到低', value: 'reversePrice'},
          {sort: '用户评测', value: 'review'}
        ],
        total: 0,
        current: 1,
        size: 10
      }
    },
    mounted() {
      this.keyword = this.$route.params.keyword == 'all' ? '' : this.$route.params.keyword;
      this.$req.post('game/page/search', {keyword: this.keyword, tags: this.tags, current: this.current, size: this.size}).then(res => {
        this.games = res.data.data.games;
        this.total = res.data.data.total;
      })
    },
    methods : {
      unchecked(index) {
        var name = this.tags[index];
        this.tags.splice(index, 1);
        for (var i = 0; i < this.checkBoxs.length; i++) {
          if (name === this.checkBoxs[i].name) {
            this.checkBoxs[i].value = false;
          }
        }
      },
      checked(index) {
        if (this.checkBoxs[index].value === true) {
          this.tags.push(this.checkBoxs[index].name);
        } else {
          var i;
          for (i = 0; i < this.tags.length; i++) {
            if (this.tags[i] === this.checkBoxs[index].name) {
              this.tags.splice(i, 1);
            }
          }
        }
      },
      search(queryString, cb) {
        this.$req.get('/game/content/search', {keyword: this.keyword})
          .then(res => {
            var result = this.filter(res.data.data);
            cb(result)
          })
      },
      filter(games) {
        var result = [];
        for (var i = 0; i < games.length; i++) {
          result.push({value: games[i].name});
        }
        return result;
      },
      pageChange(index) {
        this.current = index;
        this.$req.post('game/page/search',
          {keyword: this.keyword, tags: this.tags, current: this.current, size: this.size, sort: this.sortKey}).then(res => {
          this.games = res.data.data.games;
        })
      },
      clickSearch() {
        this.$req.post('game/page/search',
          {
            keyword: this.keyword,
            tags: this.tags,
            current: 1,
            size: this.size,
            sort: this.sortKey
          }).then(res => {
          this.games = res.data.data.games;
          this.total = res.data.data.total;
          this.current = 1;
        })
      },
      dropDownMenuClick(value) {
        this.keyword = value;
        this.clickSearch();
      }
    },
  }
</script>


<style lang="scss" scoped>
  .search-game {
    width: 940px;
    margin: 0 auto;

    .search-title {
      color: whitesmoke;
      font-size: 22px;
      margin-top: 30px;
    }
    .search-header {
      margin-bottom: 4px;
      background: rgba( 0, 0, 0, 0.4 );
      padding: 6px;
      position: relative;
      .search-header-right {
        label {
          color: #4c6c8c;
          margin: auto 5px;
          font-size: 14px;
        }
        display: inline-block;
        float: right;
      }
    }
    .search-no-record {
      font-size: 14px;
      color: whitesmoke;
    }

    .search-condition {
      color: #666666;
      background: #000000;
      background: rgba( 0, 0, 0, 0.2 );
      font-size: 12px;
      padding: 8px 10px;
      margin: 4px 5px 0 0;
      display: inline-block;
      border-radius: 2px;
      line-height: 14px;
      .search-condition-tag {
        /*display: block;*/
        color: #67c1f5;
        margin-right: 8px;
        line-height: 14px;
      }
    }


    .game-search-page {
      width: 940px;
      position: relative;
      display: flex;
      margin-bottom: 20px;
      .search-game-list {
        width: 700px;
        .search_page {
          float: right;
        }
      }
      .search-condition-area {
        width: 220px;
        margin-left: 20px;
        margin-top: 5px;
        height: max-content;
        padding-bottom: 40px;
        border: 1px solid;
        margin-bottom: 20px;

        span {
          display: block;
          color: #9fbbcb;
          background: rgba(103, 193, 245, 0.2);
        }
        ul {
          margin-top: 10px;
          li {
            color: #9fbbcb;
            padding: 3px 5px 5px 3px;
            label {
              margin-left: 10px;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
</style>


