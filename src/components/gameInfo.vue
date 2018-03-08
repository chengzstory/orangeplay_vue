<template>
  <div class="game_info">

    <div class="game_info_desc">
      <div>
        <div class="game_area_purchase">
          <span class="purchase_game_name"><strong>购买 WallPaper Engine</strong></span>

          <div class="purchase_game_action">
            <div class="purchase_action_bg">
              <div class="game_purchase_price">18</div>
              <div class="btn_addtocart"><a href="#" class="btn_medium">加入购物车</a></div>
            </div>
          </div>
        </div>

        <div class="game_area_desc">
          <h2 >关于这款游戏</h2>
          欢迎来到《死亡细胞》，这是一款将Roguelite与银河战士恶魔城类特点融为一炉的2D平台动作游戏。
          游戏中并无检查点，玩家将体验魂味战斗，
          一路挑战诸多守卫，在杀戮与死亡的反复轮回中探索一座房间不断变化的巨大城堡。”.
        </div>

        <h2 >系统需求</h2>
        <div class="game_page_autocollapse_ctn">
          <div class="lowest_config">
            <ul>
              <strong style="color:#67c1f5;">最低配置:</strong>
              <ul class="bb_ul">
                <li v-for="config in lowestConfig" :key="config.value" style="color: #c6d4df; margin-bottom: 5px">
                  <strong>{{config.title}}: </strong>{{config.value}}
                </li>
              </ul>
            </ul>
          </div>
          <div class="recommend_config">
            <ul>
              <strong style="color:#67c1f5;">推荐配置:</strong>
              <ul class="bb_ul">
                <li v-for="config in lowestConfig" :key="config.value" style="color:#c6d4df;margin-bottom: 5px">
                  <strong>{{config.title}}: </strong>{{config.value}}
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div class="similar_game_area">
        <h2>更多类似产品</h2>
        <a href="#" class="small_cap" v-for="num in [1, 2, 3, 4, 5]">
          <img src="/static/5.jpg">
          <h4><strong>Fuse</strong></h4>
          <div style="line-height: 15px;color:#67c1f5;">免费</div>
        </a>
      </div>
    </div>


  </div>
</template>

<style scoped>
  .game_area_purchase {
    background: linear-gradient(135deg, rgba(97, 100, 101, 0.3) 0%, rgba(226, 244, 255, 0.3) 100%);
    padding: 20px;
    position: relative;
  }
  .purchase_game_name {
    font-size: 20px;
    color: aliceblue;
  }
  .game_purchase_price {
    font-size: 13px;
    padding-left: 12px;
    padding-right: 12px;
    height: 20px;
    background-color: black;
  }
  .btn_addtocart {
    position: relative;
  }
  .btn_medium {
    border-radius: 2px;
    border: none;
    padding: 3px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none !important;
    color: #D2E885 !important;
    background: linear-gradient( to bottom, rgba(121,153,5,1) 5%, rgba(83,105,4,1) 95%);
  }
  .purchase_action_bg {
    height: 32px;
    vertical-align: bottom;
    display: inline-block;
    background-color: black;
    padding: 2px 2px 2px 0px;
    border-radius: 2px;
    font-size: 0;
  }
  .purchase_action_bg > * {
    font-size: 15px;
    display: inline-block;
    margin-left: 2px;
    vertical-align: middle;
  }
  * {
    padding: 0;
    margin: 0;
  }

  .purchase_game_action {
    right: 16px;
    bottom: -17px;
    left: 16px;
    white-space: nowrap;
    text-align: right;
    position: absolute;
  }

  .similar_game_area {
    width: 200px;
    height: 700px;
    margin-left: 50px;
  }
  .small_cap {
    display: inline-block;
    height: 130px;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0.2);
  }
  .small_cap:hover {
    border: 1px solid #67c1f5;
  }
  h2 {
    color: aliceblue;
    margin-bottom: 10px;
  }
  img {
    float: left;
    width: 170px;
    height: 79px;
  }
  .game_page_autocollapse_ctn {
    padding-bottom: 20px;
    display: flex;
  }
  .game_info_desc {
    display: flex;
    margin-top: 30px;
  }
  .game_area_desc {
    line-height: 1.5em;
    font-size: 14px;
    margin-top: 30px;
    overflow: hidden;
    font-weight: normal;
    width: 600px;
    color: rgb(156, 163, 170);
    margin-bottom: 60px;
    margin-top: 100px;
  }
  .game_info {
    margin-left: 300px;
    margin-right: 350px;
  }
  .lowest_config {
    width: 300px;
  }
  .recommend_config {
    width: 300px;
  }
  h4 {
    font-size: 13px;
    font-weight: normal;
    color: #8f98a0;
    width: 171px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0px;
  }
</style>

<script>
  export default {
    data() {
      return {
        lowestConfig : [
          {title : '操作系统', value : 'Windows 7 (with Aero), 8.1, 10'},
          {title : '处理器', value : '1.66 GHz Intel i5 or equivalent'},
          {title : '内存', value : '1024 MB RAM'},
          {title : '图形', value : 'HD Graphics 4000 or above'},
          {title : 'DirectX 版本:', value : '10'},
          {title : '存储空间', value : '需要 512 MB 可用空间'}
        ],
        recommendConfig : [
          {title : '操作系统', value : 'Windows 7 (with Aero), 8.1, 10'},
          {title : '处理器', value : '1.66 GHz Intel i5 or equivalent'},
          {title : '内存', value : '1024 MB RAM'},
          {title : '图形', value : 'HD Graphics 4000 or above'},
          {title : 'DirectX 版本', value : '10'},
          {title : '存储空间', value : '需要 512 MB 可用空间'}
        ],
      }

    },
    mounted() {
      axios.get('https://test-share-info.pingpongx.com/city/queryById', {
        params : {
          id : 1
        }
      }).then((res) => {
        console.log(res);
      })
    }
  }
</script>

