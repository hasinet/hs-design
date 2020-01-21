import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('h-button', Button)
Vue.component('h-icon', Icon)
Vue.component('h-button-group', ButtonGroup)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false
    },
    methods: {
        funhasi() {
            alert('aaa')
        }
    }
})

//TDD and BDD
import chai from 'chai'
const expect = chai.expect
import spies from 'chai-spies'
chai.use(spies)

//单元测试-icon:settings
{
    const Constructor = Vue.extend(Button)
    const buttonVM = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    //可以mount到指导标签里，也可以mount 内存里 button.$mount()
    //button.$mount('#test')
    buttonVM.$mount()

    let useElement = buttonVM.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    buttonVM.$el.remove()
    buttonVM.$destroy()
}
//单元测试-icon:loading
{
    const Constructor = Vue.extend(Button)
    const buttonVM = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    });

    buttonVM.$mount()
    let useElement = buttonVM.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    buttonVM.$el.remove()
    buttonVM.$destroy()
}
//单元测试-icon在左边
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const buttonVM = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });

    buttonVM.$mount(div)
    let svg = buttonVM.$el.querySelector('svg')
    //let order = window.getComputedStyle(svg).order
    let { order } = window.getComputedStyle(svg)
    console.log(order)
    expect(order).to.eq('1')
    buttonVM.$el.remove()
    buttonVM.$destroy()
}
//单元测试-icon在右边
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const buttonVM = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    });

    buttonVM.$mount(div)
    let svg = buttonVM.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    console.log(order)
    expect(order).to.eq('2')
    buttonVM.$el.remove()
    buttonVM.$destroy()
}
//单元测试-click
{
    //mock
    const Constructor = Vue.extend(Button)
    const buttonVM = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });

    buttonVM.$mount()

    let spy = chai.spy(function () { })

    buttonVM.$on('click', spy)

    //期望click函数被执行
    let button = buttonVM.$el
    button.click()

    expect(spy).to.have.been.called()

}