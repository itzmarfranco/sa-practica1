import { create }  from 'react-test-renderer'
import App from './App'

describe('<App />', () => {
  it('Check for page header', ()=>{
    const component = create(<App/>)
    const header = component.root.findByType('h1')
    
    expect(header.children[0]).toEqual('My React webpage')
  })
})