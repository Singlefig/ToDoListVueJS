var app = new Vue ({
    el:'#app',
    data: {
        title:"ToDo List",
        tasks: [
            {text: "First",date: "23:01:2020 19:18"},
            {text: "Second",date: "21:01:2020 11:37"},
            {text: "Third",date: "18:01:2020 13:32"},
            {text: "Fourth",date: "17:01:2020 15:12"},
            {text: "Fifth",date: "15:01:2020 08:38"}
        ]
    },
    methods: {
        addItem: function() {
            let input = document.getElementById('itemForm');
            let inputDate = document.getElementById('itemDateForm');
            if(input.value !== '' && inputDate.value !== '') {
                this.tasks.push({
                    text:input.value,date:inputDate.value
                })
                input.value = "";
                inputDate.value = "";
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