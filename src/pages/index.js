import Fano from 'fano-react'
import { Button } from 'antd'
import config from './config.json'

const FanoInst = Fano.fromJson(config)
const FanoPage = FanoInst.render()

export default function () {
  return (
    <div style={{ padding: 15 }}>
      <FanoPage config={config} />
      <Button.Group>
        <Button onClick={e => { console.log(FanoInst.value) }}>取值</Button>
        <Button onClick={e => { FanoInst.value = { username: 'lisi', name: '李四' } }}>设值</Button>
        <Button onClick={e => { FanoInst.clear() }}>清空</Button>
      </Button.Group>
    </div>
  )
}
