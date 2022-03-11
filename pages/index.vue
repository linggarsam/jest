<template>
  <div style="width: 20%; padding: 5px">
    <div>
        Pertanyaan 1
    </div>
    <div v-for="(answer, index) in choice" :key="index">
      <label>{{ answer.label }}. {{ answer.answer }}</label>
    </div>
    <QontakInput v-model="userAnswer" @keyup.native="checkAnswer" />
    <div>
      <label>
        {{ result }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      choice: [
        {
          label: 'a',
          answer: 'Ya'
        },
        {
          label: 'b',
          answer: 'Tidak'
        }
      ],
      userAnswer: '',
      result: 'Belum terjawab'
    }
  },
  methods: {
    checkAnswer (e) {
      const answerExist = this.validateAnswer()
      switch (answerExist) {
        case true:
          this.result = 'Sudah terjawab'
          break
        case false:
          this.result = 'Jawaban tidak sesuai pilihan'
          break
        default:
          this.result = 'Belum terjawab'
          break
      }
    },
    validateAnswer () {
      if (this.userAnswer === '') {
        return undefined
      }
      const answerExist = this.choice.find(item => item.label === this.userAnswer)
      if (answerExist) {
        return true
      }
      return false
    }
  }
}
</script>
