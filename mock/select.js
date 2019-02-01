export default {
  'get /api/select/options': {
    data: {
      list: [
        {
          'label': 'Jack',
          'value': 'jack'
        },
        {
          'label': 'Lucy',
          'value': 'lucy'
        },
        {
          'label': 'Eason',
          'value': 'eason'
        },
        {
          'label': 'Ming',
          'children': [
            {
              'label': '未知',
              'value': '0'
            },
            {
              'label': '男',
              'value': '1'
            },
            {
              'label': '女',
              'value': '2'
            }
          ]
        }
      ]
    }
  }
}
