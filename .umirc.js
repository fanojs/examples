
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'Fano Examples',
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
  proxy: {
    '/api/v1/upload': {
      target: 'https://k11-central.wosoft.me',
      changeOrigin: true
    },
    '/public/upload': {
      target: 'https://k11-central.wosoft.me',
      changeOrigin: true
    },
  }
}
