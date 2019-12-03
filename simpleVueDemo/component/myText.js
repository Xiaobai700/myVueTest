let myText = {
    name:'myText',
    props: {
        value: {
            type: String,
            default: '',
        }
    },
    template: ` <input
            type="text"
            class="input"
            :value="value"
            v-on="listeners"
    >`,
    computed: {
        listeners () {
            return {
                //将所有组件侦听器直接传递给输入
                ...this.$listeners,
                //覆盖输入侦听器以使用v模型,确保组件配合`v-model`的工作
                input: event => this.$emit('input', event.target.value)
                //等同于这种写法
                //input:function(event){
                //this.$emit('input', event.target.value)
                // }
            }
        }
    },
    methods:{

    }
};

export default myText;
