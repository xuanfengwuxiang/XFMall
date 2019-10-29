//logs.js

Page({

  data: {

    left_index: 1,

    img_src: "",

    list: [{

        id: 1,

        title: "塑料瓶",
      },

      {

        id: 2,

        title: "纺织物",

      },

      {

        id: 3,

        title: "纸类",

      },

      {

        id: 4,

        title: "金属类",
      },

      {

        id: 5,

        title: "其他",

      },

    ],
    items: [{
        title: "矿泉水",
        image: "/images/me/ic_head_default.jpg"
      },
      {
        title: "矿泉水",
        image: "/images/me/ic_head_default.jpg"
      },
      {
        title: "矿泉水",
        image: "/images/me/ic_head_default.jpg"
      },
      {
        title: "矿泉水",
        image: "/images/me/ic_head_default.jpg"
      },
      {
        title: "矿泉水",
        image: "/images/me/ic_head_default.jpg"
      },
    ],
    titleType: true,

  },

  // 第一次进来加载

  onLoad: function() {

    this.setData({

      left_index: this.data.list[0].id,

    })

  },

  // 点击左选项

  bt_left(e) {
    this.setData({
      left_index: e.currentTarget.dataset.id.id,
    })
  },

  //点击头部
  bt_title(e) {
    this.setData({

      titleType: !this.data.titleType,

    })
  }

})