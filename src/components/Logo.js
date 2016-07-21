
import React, { PropTypes } from 'react'

function Logo({ logoSvg }) {
  return (
    <a href="/">
      <div className="logo" dangerouslySetInnerHTML={{ __html: logoSvg }} />
    </a>

  )
}

Logo.propTypes = {
  logoSvg: PropTypes.string.isRequired,
}
Logo.defaultProps = {
  logoSvg: '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372.7 41.3" style="enable-background:new 0 0 372.7 41.3;" xml:space="preserve"><g class="dl-logo"><path class="st0" d="M7.4,34v-1.1h0.2c0.8,0,1.4-0.3,1.7-0.9c0.3-0.6,0.5-1.8,0.5-3.5V13.1c0-1.7-0.2-2.9-0.5-3.5 C9,9,8.4,8.7,7.6,8.7H7.4V7.6h13.3c4.2,0,7.5,1.2,10,3.5s3.7,5.5,3.7,9.6c0,4.1-1.2,7.4-3.7,9.8c-2.5,2.4-5.9,3.6-10.2,3.6H7.4z M13,32.9h7c3,0,5.5-1.2,7.5-3.5s3.1-5.3,3.1-8.7c0-2.2-0.5-4.2-1.4-6.1c-1-1.9-2.2-3.4-3.8-4.4c-0.8-0.5-1.8-0.9-2.9-1.1 s-2.5-0.4-4-0.4H13V32.9z"/> <path class="st0" d="M47.8,33c1.5,0,2.6-0.3,3.4-0.8c0.8-0.5,1.5-1.4,2-2.7h1V34H36.8v-1h0.1c0.7,0,1.2-0.2,1.4-0.6 c0.3-0.4,0.4-1.2,0.4-2.4V19.7c0-1.2-0.1-2-0.4-2.4c-0.3-0.4-0.7-0.6-1.3-0.6h-0.2v-1.1h17.5V20h-1c-0.5-1.2-1.1-2-2-2.5 c-0.8-0.5-2-0.8-3.4-0.8h-6.1v6.9h1.9c1.5,0,2.6-0.2,3.3-0.5c0.7-0.4,1.1-0.9,1.1-1.7h1v5.5l-1,0c0-0.8-0.4-1.3-1.1-1.7 c-0.7-0.4-1.8-0.5-3.3-0.5h-1.9V33H47.8z"/> <path class="st0" d="M71.1,32.9c1.8,0,3.3-0.4,4.3-1.2c1.1-0.8,1.9-2.1,2.5-3.8H79V34H56.7v-1.1h0.1c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.6,0.5-1.8,0.5-3.5V13.1c0-1.7-0.2-2.8-0.5-3.4c-0.3-0.6-0.9-0.9-1.7-0.9h-0.2V7.6h8v1.1h-0.1c-0.8,0-1.4,0.3-1.8,0.9 c-0.3,0.6-0.5,1.8-0.5,3.5v19.8H71.1z"/> <path class="st0" d="M84.2,29.1c-0.3,0.5-0.5,1-0.6,1.4c-0.1,0.4-0.2,0.7-0.2,1c0,0.4,0.2,0.8,0.6,1.1c0.4,0.3,1,0.4,1.7,0.5v1 h-7.1v-1c0.9,0,1.7-0.3,2.3-0.8c0.6-0.5,1.4-1.5,2.2-3.1l7.5-13.8l9.9,15.6c0.4,0.6,0.8,1,1.3,1.4c0.5,0.4,1,0.6,1.5,0.7v1h-7.9v-1 h0.2c0.5,0,0.8-0.1,1.1-0.4c0.3-0.2,0.4-0.6,0.4-1c0-0.2-0.1-0.5-0.2-0.8c-0.1-0.3-0.3-0.6-0.5-0.9L94.6,27h-9.3L84.2,29.1z M85.9,26h8l-4.4-6.7L85.9,26z"/> <path class="st0" d="M104.4,34v-1h0.1c1,0,1.8-0.3,2.2-1c0.5-0.6,0.7-1.6,0.7-2.9v-11l-0.7-0.7c-0.3-0.3-0.5-0.4-0.8-0.5 c-0.3-0.1-0.6-0.2-1-0.2h-0.2v-1.1h4.3l14,14v-9.2c0-1.3-0.2-2.3-0.7-2.9c-0.5-0.6-1.2-0.9-2.1-0.9h-0.3v-1.1h7.1v1.1h-0.3 c-0.9,0-1.6,0.3-2.1,0.9c-0.5,0.6-0.7,1.6-0.7,2.9v14.3l-15.5-15.6v9.9c0,1.3,0.2,2.3,0.7,3c0.5,0.6,1.3,0.9,2.3,0.9v1H104.4z"/> <path class="st0" d="M141.6,29.9c0,1.2,0.1,2,0.4,2.4s0.7,0.6,1.4,0.6h0.1v1h-6.8v-1h0.1c0.7,0,1.2-0.2,1.4-0.6s0.4-1.2,0.4-2.4 v-3.5l-6.8-7.7c-0.6-0.6-1.2-1.1-1.9-1.5s-1.4-0.5-2.2-0.5l0-1.1h8.6v1.1h-0.1c-0.4,0-0.7,0.1-0.9,0.2c-0.2,0.1-0.3,0.3-0.3,0.6 c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.5,0.6,0.8l5.2,5.9l4.6-5.3c0.3-0.4,0.6-0.7,0.7-1c0.2-0.3,0.2-0.5,0.2-0.6 c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.9-0.3-1.8-0.4v-1.1h8l0,1.1c-1.2,0.1-2.2,0.4-2.9,0.8c-0.8,0.4-1.5,0.9-2.1,1.7l-5.5,6.4V29.9z" /> <path class="st0" d="M175.7,27.1c-1.7,2.5-3.3,4.4-4.9,5.5c-1.6,1.1-3.3,1.7-5,1.7c-2.1,0-3.8-0.6-5.1-1.8c-1.3-1.2-2-2.8-2-4.7 c0-2,0.7-3.7,2-5.1c1.3-1.4,3.5-2.6,6.5-3.7c-1.4-1.1-2.5-2.1-3-3.1c-0.6-0.9-0.9-1.9-0.9-3c0-1.7,0.6-3.1,1.9-4.1 c1.3-1.1,2.9-1.6,4.9-1.6c1.9,0,3.5,0.5,4.8,1.6s1.9,2.4,1.9,4c0,1.2-0.4,2.3-1.2,3.2c-0.8,0.9-2.1,1.7-3.7,2.3 c0.8,0.6,1.6,1.3,2.4,2.1s1.7,1.7,2.6,2.8c1.5-2,2.8-3.5,3.8-4.3s2-1.2,3-1.2c0.9,0,1.7,0.3,2.3,0.8c0.6,0.5,0.9,1.2,0.9,2 c0,0.7-0.2,1.2-0.7,1.7c-0.5,0.5-1,0.7-1.6,0.7c-0.7,0-1.3-0.2-1.7-0.7c-0.4-0.5-0.7-1.2-0.7-2.2h0c-0.5,0-1.2,0.4-2,1.2 c-0.8,0.8-1.6,1.8-2.4,3.1c1.9,2.6,3.5,4.5,4.8,5.6c1.3,1.1,2.4,1.7,3.4,1.7c0.2,0,0.4,0,0.6-0.1s0.5-0.1,0.9-0.2l0.6,0.9 c-0.4,0.6-0.9,1.1-1.5,1.4c-0.6,0.3-1.3,0.5-2,0.5c-1.3,0-2.5-0.5-3.8-1.5C179.6,31.9,177.9,29.9,175.7,27.1z M175,26.2 c-1-1.4-2-2.6-3.1-3.6c-1.1-1-2.3-2-3.6-2.8c-2,0.8-3.5,1.8-4.6,3c-1.1,1.2-1.6,2.5-1.6,3.8c0,1.3,0.5,2.3,1.4,3.2 c0.9,0.8,2.1,1.2,3.6,1.2c1.4,0,2.8-0.4,4.1-1.3C172.5,28.9,173.8,27.7,175,26.2z M170.7,17.6c1.8-0.6,3.1-1.3,3.9-2 c0.8-0.7,1.2-1.6,1.2-2.7c0-1.2-0.5-2.3-1.6-3.2c-1-0.9-2.2-1.4-3.6-1.4c-1.3,0-2.4,0.3-3.2,1s-1.3,1.6-1.3,2.6 c0,0.8,0.3,1.6,0.8,2.3C167.5,15.1,168.7,16.2,170.7,17.6z"/> <path class="st0" d="M211.6,32.9c1.8,0,3.3-0.4,4.3-1.2c1.1-0.8,1.9-2.1,2.5-3.8h1.1V34h-22.3v-1.1h0.1c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.6,0.5-1.8,0.5-3.5V13.1c0-1.7-0.2-2.8-0.5-3.4c-0.3-0.6-0.9-0.9-1.7-0.9h-0.2V7.6h8v1.1h-0.1c-0.8,0-1.4,0.3-1.8,0.9 c-0.3,0.6-0.5,1.8-0.5,3.5v19.8H211.6z"/> <path class="st0" d="M230.1,15.3c3.3,0,6,0.9,8,2.6c2.1,1.7,3.1,4,3.1,6.7c0,2.8-1,5.2-3.1,7s-4.8,2.7-8,2.7c-3.3,0-6-0.9-8-2.6 s-3.1-4-3.1-6.7c0-2.8,1-5.2,3.1-7S226.8,15.3,230.1,15.3z M237.6,24.7c0-2.4-0.7-4.4-2.1-6.1c-1.4-1.6-3.2-2.4-5.4-2.4 c-2.1,0-3.9,0.8-5.4,2.5c-1.5,1.6-2.2,3.7-2.2,6.1c0,2.4,0.7,4.5,2.1,6s3.2,2.4,5.4,2.4c2.1,0,3.9-0.8,5.4-2.4 C236.9,29.2,237.6,27.2,237.6,24.7z"/> <path class="st0" d="M241.1,34v-1h0.1c1,0,1.8-0.3,2.2-1c0.5-0.6,0.7-1.6,0.7-2.9v-11l-0.8-0.7c-0.3-0.3-0.5-0.4-0.8-0.5 c-0.3-0.1-0.6-0.2-1-0.2h-0.2v-1.1h4.3l14,14v-9.2c0-1.3-0.2-2.3-0.7-2.9c-0.5-0.6-1.2-0.9-2.1-0.9h-0.3v-1.1h7.1v1.1h-0.3 c-0.9,0-1.6,0.3-2.1,0.9c-0.5,0.6-0.7,1.6-0.7,2.9v14.3l-15.5-15.6v9.9c0,1.3,0.2,2.3,0.7,3c0.5,0.6,1.3,0.9,2.3,0.9v1H241.1z"/> <path class="st0" d="M283.4,30.3c-1.3,1.3-2.8,2.3-4.4,3c-1.6,0.7-3.4,1-5.2,1c-3.1,0-5.7-0.9-7.7-2.6s-3-4-3-6.8c0-2.8,1-5,3-6.9 c2-1.8,4.5-2.7,7.4-2.7c0.8,0,1.9,0.1,3.2,0.4c1.3,0.3,2.2,0.4,2.8,0.4c0.3,0,0.7,0,1-0.1c0.4-0.1,0.8-0.2,1.3-0.3V20h-1 c-0.8-1.2-1.8-2.1-3-2.7c-1.2-0.7-2.5-1-3.8-1c-2.1,0-3.9,0.8-5.2,2.3s-2,3.6-2,6.1c0,2.4,0.8,4.4,2.3,6.1c1.5,1.6,3.4,2.4,5.8,2.4 c1.6,0,2.7-0.3,3.5-1s1.1-1.8,1.1-3.2v-1.9c0-0.9-0.1-1.4-0.3-1.7c-0.2-0.3-0.6-0.5-1.2-0.5h-0.1v-1h6.2v1h-0.2 c-0.5,0-0.9,0.2-1.1,0.5c-0.2,0.3-0.3,0.9-0.3,1.7v1.3c0,0.4,0.1,0.7,0.2,1.1C282.9,29.7,283.1,30,283.4,30.3z"/> <path class="st0" d="M308.1,32.9c1.8,0,3.3-0.4,4.3-1.2c1.1-0.8,1.9-2.1,2.5-3.8h1.1V34h-22.3v-1.1h0.1c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.6,0.5-1.8,0.5-3.5V13.1c0-1.7-0.2-2.8-0.5-3.4c-0.3-0.6-0.9-0.9-1.7-0.9h-0.2V7.6h8v1.1h-0.1c-0.8,0-1.4,0.3-1.8,0.9 c-0.3,0.6-0.5,1.8-0.5,3.5v19.8H308.1z"/> <path class="st0" d="M322.9,16.7h-1.6c-1.4,0-2.6,0.3-3.4,0.8c-0.8,0.5-1.5,1.3-2,2.5h-1v-4.4H334V20h-1c-0.5-1.2-1.1-2-2-2.5 c-0.8-0.5-2-0.8-3.4-0.8h-1.7v13.3c0,1.1,0.1,1.9,0.4,2.4c0.3,0.4,0.7,0.7,1.4,0.7h0.1v1H321v-1h0.1c0.7,0,1.2-0.2,1.4-0.6 c0.3-0.4,0.4-1.2,0.4-2.4V16.7z"/> <path class="st0" d="M336.8,21c0-1.7-0.2-2.8-0.5-3.4s-0.9-0.9-1.8-0.9h-0.2v-1.1h11.4c3.3,0,5.9,0.8,7.9,2.5s2.9,3.9,2.9,6.6 c0,2.9-1,5.1-2.9,6.8s-4.6,2.5-8,2.5h-11.2v-1h0.2c0.8,0,1.4-0.3,1.7-0.9c0.3-0.6,0.5-1.8,0.5-3.4V21z M339.8,33h5.3 c2.3,0,4.1-0.8,5.7-2.4c1.5-1.6,2.3-3.5,2.3-5.9c0-2.6-0.8-4.5-2.4-5.9c-1.6-1.4-3.8-2.1-6.8-2.1h-4.1V33z"/> <path class="st0" d="M358.1,31.8c0-0.7,0.2-1.3,0.7-1.8c0.5-0.5,1-0.7,1.7-0.7c0.7,0,1.2,0.2,1.7,0.7c0.5,0.5,0.7,1.1,0.7,1.8 c0,0.7-0.2,1.3-0.7,1.8s-1,0.7-1.7,0.7c-0.6,0-1.2-0.2-1.7-0.7C358.3,33.1,358.1,32.5,358.1,31.8z"/></g></svg>',
}

export default Logo
