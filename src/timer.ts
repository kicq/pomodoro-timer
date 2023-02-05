import { Ref, ref } from 'vue'
import countdown from '@/assets/countdown.wav'

export type State = 'running' | 'stopping' | 'suspended' | 'prepare'

const audio = new Audio(countdown);

class Timer {
  options = {
    workTime: 10,
    breakTime: 20
  }

  state: Ref<State> = ref('stopping')

  isBreakTime: boolean = false

  currentCounter: Ref<number> = ref(this.options.workTime)

  private _interval: number | undefined = undefined
  private _timeout: number | undefined = undefined

  start () {
    this._clear()
    audio.play()
    this.state.value = 'prepare'
    this._timeout = setTimeout(() => {
      
      this.state.value = 'running'
      this._interval = setInterval(() => {
        if(this.currentCounter.value <= 0) {
          this.isBreakTime = !this.isBreakTime
          this.isBreakTime ? this.currentCounter.value = this.options.breakTime : this.currentCounter.value = this.options.workTime
        } else if(this.currentCounter.value === 4) audio.play()
        this.currentCounter.value--
      }, 1000)
    }, 3000)
  }

  stop () {
    this.state.value = 'suspended'
    this._clear()
  }
  reset() {
    this.state.value = 'stopping'
    this._clear()
    this.isBreakTime = false
    this.currentCounter.value = this.options.workTime
  }
  private _clear(){
    clearInterval(this._interval)
    clearTimeout(this._timeout)
    audio.pause();
    audio.currentTime = 0;
  }
}

export default new Timer