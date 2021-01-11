let app = new Vue({
  el: '#root',
  data: {
    musicDiscs: '',
  },

  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(dataDisc => {
        //console.log(dataDisc.data.response);
        this.musicDiscs = dataDisc.data.response;

      })
      .catch(error => {
        //console.log(error);
      })
  }
})
