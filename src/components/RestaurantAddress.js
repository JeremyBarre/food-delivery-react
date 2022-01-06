function RestaurantAddress (props) {
  const { adresse } = props
  return (
    <div>
      <h2><a target='_blank' href='https://g.page/coqmonsieur?share' rel='noreferrer'>{`${adresse.adresse}, ${adresse.code_postal} - ${adresse.ville} | ${adresse.pays}`}</a></h2>
      <h3><a href={`tel:${adresse.phone}`}>{adresse.phone}</a></h3>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.07750953036!2d-1.55721418396792!3d47.215065679160624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805efc27772eee1%3A0x9c8c30f7d7ff2ad0!2sCoq%20Monsieur!5e0!3m2!1sfr!2sfr!4v1641376422369!5m2!1sfr!2sfr' width={500} height={350} style={{ border: 0 }} allowFullScreen='' loading='lazy' />
    </div>
  )
}

export default RestaurantAddress
