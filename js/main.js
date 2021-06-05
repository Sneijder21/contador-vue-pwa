const app = Vue.createApp({
    data() {
        return {
            title: 'Contador App - Vue',
            count: 0
        }
    },
    methods:{
        addCount(limit){
            this.count += limit;
        },
        disCount(){
            if( this.count == 0 )
                alert('No se puede decrementar mas');
            else
                this.count--;
        },
        modCount( instruction = 'add', limit = 1 ){
            instruction === 'dis' ? this.count -=limit: this.addCount(limit);
        }
    }
});