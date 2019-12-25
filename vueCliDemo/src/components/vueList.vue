<template>
    <div>
        <my-text
                v-model="newTodoText"
                placeholder="输入一个待办事项"
                @keydown.enter="addTodo"

        />
        <ul v-if="todos.length">
            <my-item
                    v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"
                    @remove="removeTodo"
            />
        </ul>
        <p v-else>
            列表中一无所有。 在上面的输入中添加一个新的待办事项。
        </p>
    </div>
</template>

<script>
    import myItem from './vueItem.vue'
    import myText from './vueText.vue'
    let nextTodoId = 1;
    export default {
        name: "vueList",
        components:{
            myItem,myText
        },
        data(){
            return{
                newTodoText: '',
                todos: [
                    {
                        id: nextTodoId++,
                        text: 'Learn Vue'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Learn about single-file components'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Learn Node.js'
                    }
                ]
            }
        },
        methods: {
            addTodo () {
                const trimmedText = this.newTodoText.trim()
                if (trimmedText) {
                    this.todos.push({
                        id: nextTodoId++,
                        text: trimmedText
                    })
                    this.newTodoText = ''
                }
            },
            removeTodo (idToRemove) {
                this.todos = this.todos.filter(todo => {
                    return todo.id !== idToRemove
                })
            }
        }
    }
</script>

<style scoped>

</style>
