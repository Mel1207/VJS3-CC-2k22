let app = Vue.createApp({
    // data, functions
    // template: '<h2>This is h2 template</h2>'
    data () {
        return {
            url: 'http://www.google.com',
            showBooks: 'true',
            books: 
                [
                    {title: 'name of the wind', author: 'patrick focus', img: 'assets/project-1.png', isFav: true},
                    {title: 'rasta man', author: 'samuel druig', img: 'assets/project-2.png', isFav: false},
                    {title: 'coded prowress', author: 'mel johnson', img: 'assets/project-3.png', isFav: true},
                ],
            x: 0,
            y: 0,
            // isFav: true
        }
    },
    methods: {
        // changeTitle(title) {
        //     // this.title = 'changed Title'
        //     this.title = title
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log(e, e.type)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }, 
        toggleClass (item) {
            item.isFav = !item.isFav
            // console.log('toggle is click')
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((item) => item.isFav)
        }
    }
})

app.mount('#app')