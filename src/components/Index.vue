<template>
  <div>
    <div class="container">
      <div class="row mt-5 align-items-center rounded-3 text-center" style="background-color: #eaeaea">
        <div class="col">
          <h1>Куда вы хотите поехать?</h1>
          <h4>
            <router-link to="/map">Закажите</router-link>
            такси онлайн сейчас!
          </h4>
          <p class="px-5">На этом сайте вы можете заказат себе такси онлайн когда вам угодно, просто укажите куда и
            откуда вы хотите поехать
          </p>
        </div>
        <div class="col pe-0">
          <t-gis-map :center="[51.135, 71.43]" :zoom="12" :static="true" :styles="{width: '100%', height: '500px'}" @click="$router.push('/map')"/>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h2>
            <span class="pe-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
              </svg>
            </span>
            Быстро
          </h2>
          Доезжайте до места за оптимальное время
        </div>
        <div class="col">
          <h2>
            <span class="pe-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </span>
            Безопасно
          </h2>
          Наши сервисы гарантируют безопасность перевозки
        </div>
        <div class="col">
          <h2>
            <span class="pe-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
              </svg>
            </span>
            Дешево
          </h2>
          Стоимость поездки ниже, чем у конкурентов
        </div>
      </div>
    </div>
    <div class="card-footer pb-3">
      <div class="container d-flex justify-content-evenly">
        <svg viewBox="0 0 128 128" width="50" height="50">
          <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path>
          <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path>
        </svg>
        <svg width="50" height="50" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
          <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
          <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
        </svg>
        <svg width="140" height="50" viewBox="0 0 47809.1 15478.6">
          <g>
            <g>
              <path d="M45610.17 5701.03l2193.56 0c-277.44,-2135 -1836.72,-3257.22 -4003.95,-3257.22 -2193.5,0 -3660.28,1163.3 -3660.28,3161.42 0,2271.83 1889.61,2778.16 2893.89,2983.52 1295,260.01 2563.56,287.4 2563.56,1436.95 0,780.1 -634.28,1163.3 -1532.83,1163.3 -1110,0 -1849.94,-574.8 -2035,-1614.86l-2167.12 0c132.11,2244.44 1704.67,3448.77 4017.17,3448.77 2140.67,0 3898.11,-1012.72 3898.11,-3202.45 0,-2353.99 -2021.72,-2778.22 -3435.67,-2997.21 -964.67,-150.52 -2021.78,-287.4 -2021.78,-1341.21 0,-739.02 541.78,-1190.63 1453.56,-1190.63 1057.17,0 1691.39,615.89 1836.78,1409.62z"/>
              <polygon points="38659.51,2785.98 36584.84,2785.98 36584.84,12708.11 38659.51,12708.11 "/>
              <path d="M30321.31 9245.63l2708.95 0c-422.89,1067.56 -1374.34,1573.83 -2471.12,1573.83 -1929.22,0 -2827.78,-1546.45 -2827.78,-3079.26 0,-1546.51 845.67,-3120.34 2814.61,-3120.34 1202.5,0 2101,574.8 2444.61,1601.22l2233.18 0.01c-383.17,-2312.85 -2338.89,-3640.37 -4651.34,-3640.37 -2854.28,0 -4995.01,2011.75 -4995.01,5186.87 0,3216.14 2325.67,5118.46 4981.73,5118.46 2616.45,0 4664.62,-1765.44 4664.62,-4529.96l0 -807.49 -4902.45 0 0 1697.03z"/>
              <path d="M20833.51 2580.71c-2378.56,0 -4136.06,1546.45 -4122.84,4119.37l2140.72 0c-26.45,-1122.22 660.67,-2148.64 1876.39,-2148.64 1057.17,0 1678.22,766.41 1678.22,1642.25 0,875.9 -621.06,1368.6 -1770.72,1902.38 -1572.5,725.32 -2695.67,1190.63 -3845.34,1601.22l0 3010.84 8007.85 0 0 -2025.51 -5497.47 0c0,0 18.3,-5.92 27.31,-8.73 935.05,-293.44 1637.52,-612.24 2470.54,-990.3 1783.89,-821.12 2801.39,-1847.6 2801.39,-3599.34 0.01,-2148.7 -1532.83,-3503.54 -3766.05,-3503.54z"/>
              <g>
                <path d="M11081.41 9218.29c-2695.72,13.7 -3131.78,1697.02 -3277.11,3120.34l-66.06 629.52 -541.83 0 -66.06 -629.52c-145.33,-1423.32 -594.61,-3106.65 -3197.84,-3120.34 -436.06,-930.68 -621.06,-1683.39 -621.06,-2531.9 0,-2121.25 1678.22,-4105.74 4162.45,-4105.74 2484.28,0 4136.06,1970.73 4136.06,4119.49 0.01,834.76 -79.27,1587.47 -528.55,2518.15l0 0zm-3633.89 -9210.56c-4096.39,0 -7452.84,3476.21 -7452.84,7732.41 0,4270.01 3356.45,7746.16 7452.84,7746.16 4136,0 7479.23,-3476.15 7479.23,-7746.16 0,-4256.19 -3343.23,-7732.41 -7479.23,-7732.41z"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import TGisMap from "@/components/tGisMap";

export default {
  name: "Index",
  components: {TGisMap}
}
</script>

<style scoped>
.card-footer {
  position: absolute;
  bottom: 0;
  min-height: 13vh;
  width: 100%;
}
</style>
