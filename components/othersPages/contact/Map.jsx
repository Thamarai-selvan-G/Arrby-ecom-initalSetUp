// import React from "react";

// export default function Map() {
//   return (
//     <div className="w-100">
//       <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.3386064853944!2d77.31767347452188!3d11.16254565195403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90427ff5257e5%3A0xb73a757cbc513351!2sNSP%20Tex!5e0!3m2!1sen!2sin!4v1731667290715!5m2!1sen!2sin"
//   width="100%"
//   height={646}
//   style={{"border:0;"}}
//   allowfullscreen=""
//   loading="lazy"
//   referrerpolicy="no-referrer-when-downgrade"
// ></iframe>;
//     </div>
//   );
// }


import React from "react";

export default function Map() {
  return (
    <div className="w-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.3386064853944!2d77.31767347452188!3d11.16254565195403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90427ff5257e5%3A0xb73a757cbc513351!2sNSP%20Tex!5e0!3m2!1sen!2sin!4v1731667290715!5m2!1sen!2sin"
        width="100%"
        height={646}
        style={{ border: "0" }} 
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" 
      ></iframe>
    </div>
  );
}
