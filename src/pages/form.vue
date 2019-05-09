<template>
  <div>
  <button @click="getData()"  >Pesquisar</button>
  <button @click="limpar()"  >Limpar</button>
  <button @click="getFromLocal()"  >Local</button>

  <ul>
    <li v-for="it in this.lsProdutos" :key="it.iD_PRODUTO" >
      {{it.descricao}}
    </li>
  </ul>
  </div>
</template>

<script>
import srv from './srv'

export default {

  created () {
  },

  data () {
    return {
      lsProdutos: [],
      lista1: [],
      lsLista2: []
    }
  },

  methods: {

    limpar () {
      this.lsProdutos = []
    },

    getFromLocal () {
      this.lsProdutos = JSON.parse(localStorage.getItem('objProdutos'))
    },

    async getData () {
      this.lsProdutos = []
      await srv
        .getAll()
        .then(response => {
          this.lsProdutos = response.data
          let data = JSON.stringify(response.data)
          console.log(data)
          localStorage.setItem('objProdutos', data)
        })
        .catch((error) => {
          console.log(error.response.data)
        })
    }
  }

}
</script>
