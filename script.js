var app = new Vue ({
    el:'#app',
    data: {
        title:"ToDo List",
        tasks: [
            {text: "First"},
            {text: "Second"},
            {text: "Third"},
            {text: "Fourth"},
            {text: "Fifth"}
        ]
    },
    methods: {
        addItem: function() {
            let input = document.getElementById('itemForm');
            if(input.value !== '') {
                this.tasks.push({
                    text:input.value
                })
                input.value = "";
            }
        },
        deleteItem: function(item) {
            let index = this.tasks.indexOf(item.text);
            for(let i = 0; i < this.tasks.length;i++)
            {
                if(this.tasks[i].text == item.text)
                {
                    this.tasks.splice(i,1);
                }
            }
        }
    }
})