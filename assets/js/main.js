window.onload = function () {
    var pr = new Vue({
        el: "#projects",
        data: {
            items: [
                {
                    id: 1,
                    name:"Whizzo",
                    description:"Everyone knows how important it is to have a good branding strategy for your company. But what about personal branding? Look at Oprah, Richard Branson, or even the Dalai Lama, for example. There are many things you can do to create a great personal brand. One of them is Whizzo. Create your personal public page in just simple clicks.",
                    featured: "https://cdn.dribbble.com/users/999844/screenshots/7223327/media/6d3e98d42f7c2d86f9d9b70d152d4edd.jpg?compress=1&resize=800x600",
                    link:"https://www.behance.net/gallery/86035077/Whizzo-Signup-process",
                    type:"Web Design"
                },
                {
                    id: 2,
                    name:"Packtag",
                    description:"A packaging insert is an additional item that eCommerce retailers can put into shipments before sending them off to customers, and they're a great way to level up your shipping and fulfillment strategy. Packtag helps eCom owners generate customized and personalized inserts automatically from their client's orders.",
                    featured: "https://cdn.dribbble.com/users/999844/screenshots/8813565/media/d70566222ed108c02793dd424c9646e3.png?compress=1&resize=800x600",
                    fullshot: "ee",
                    link:"https://www.behance.net/gallery/114322361/Packtag-Personalized-packaging-inserts-generator?",
                    type:"Web Design"
                },
                {
                    id: 3,
                    name:"Restogrub",
                    description:"While a lot of restaurant plugin providers offer eCommerce tools as a paid extension or don’t offer them at all. Restogrub came to help small resturant owners to acquire more online clients, with a simple to use UI for both clients and businesses.",
                    featured: "https://cdn.dribbble.com/users/999844/screenshots/7349252/media/8f54dfb95f35ef8b1d44670c44100c9d.jpg?compress=1&resize=800x600",
                    fullshot: "ee",
                    link:"https://www.behance.net/gallery/114321497/Restogrub-Restaurant-cart-web-app",
                    type:"Web Design, Web App"
                },
            ]
        }
    });

    let contact = document.getElementById('contact');
    if(contact) {
        let contactVue = new Vue({
            el: '#contact',
            data: {
                email: 'youssefelmzelji@gmail.com'
            },
            methods: {
                showMail() {
                    this.$refs.emailSection.innerHTML = "<code class='font-semibold border border-gray-800 text-gray-800 p-2'><span class='mr-2'>👋🏽</span>"+this.email+"</code>";
                }
            }
        });
    }
}
