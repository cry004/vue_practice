<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                  <option value="fade">Fade</option>
                  <option value="slide">Slice</option>
                </select>
                <br/><br/>
                <button class="btn btn-primary" @click="show = !show">Show Alert </button>
                <br/><br/>
                <transition :name="alertAnimation">
                  <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <transition name="slide" appear>
                  <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition
                  appear
                  enter-active-class="animated bounce"
                  leave-active-class="animated shake">
                  <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                  <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                  <div class="alert alert-warning" v-else key="warning ">This is some Warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">road/remove element</button>
                <br><br>
                <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterenter"
                  @enter-cancelled="entercancelled"

                  @before-leave="beforeleave"
                  @leave="leave"
                  @after-leave="afterleave"
                  @leave-calcelled="leavecancelled"
                  :css="false">
                  <div style="width: 100px; height: 100px; background: lightgreen" v-if="load"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: 'fade',
      elementWidth: 100
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done) {
      console.log('Enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterenter(el) {
      console.log('afterenter');
    },
    entercancelled(el) {
      console.log('entercancelled');
    },
    beforeleave(el) {
      console.log('entercancelled');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterleave(el) {
      console.log('afterleave');
    },
    leavecancelled(el) {
      console.log('leavecancelled');
    }
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  /* transform: translateY(20px); */
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
