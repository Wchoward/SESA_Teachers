//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        currTab:0,
        undone_lst: [{
            usr_name: '李小绿',
            create_time: '2020-05-07 03:21:25',
            usr_avatar: '../../icons/coach.png',
            task_lst: [{
                time: 20,
                content: '背单词'
            }, {
                time: 40,
                content: '绘本阅读'
            }],
            self_comment: '',
        }, {
            usr_name: '李小绿',
            create_time: '2020-05-07 03:21:25',
            usr_avatar: '../../icons/coach.png',
            task_lst: [{
              time: 20,
              content: '背单词'
            }, {
              time: 40,
              content: '绘本阅读'
            }],
            self_comment: '',
          }],
      done_lst: [{
        usr_name: '李小绿',
        create_time: '2020-05-07 03:21:25',
        usr_avatar: '../../icons/coach.png',
        task_lst: [{
          time: 20,
          content: '背单词'
        }, {
          time: 40,
          content: '绘本阅读'
        }],
        self_comment: '',
        instruction: '',
      }, {
          usr_name: '李小绿',
          create_time: '2020-05-07 03:21:25',
          usr_avatar: '../../icons/coach.png',
          task_lst: [{
            time: 20,
            content: '背单词'
          }, {
            time: 40,
            content: '绘本阅读'
          }],
          self_comment: '',
        }],
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    activeTab: function (e) {
        if(e.target.id === "undone"){
          this.setData({
              currTab: 0
          })
          console.log(1)
        }
        else{
            this.setData({
                currTab: 1
            }) 
          console.log(2)
        }
    }
})
