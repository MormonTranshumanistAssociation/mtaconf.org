import * as THREE from "three"
import NET from "vanta/dist/vanta.net.min"

const hero = document.getElementById("hero")

NET({
  el: hero,
  THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0f766e,
  backgroundColor: 0x111827
})