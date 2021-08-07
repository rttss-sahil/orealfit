import React from 'react'
import { connect } from 'react-redux'

export const AuthenticityCertificate = ({state}) => {
  return (
    <div className="authenticity-page">
      <h1>AUTHENTIFICATION DISCLAIMER   (CERTIFICATES)</h1>
    <div>
      <h2>OREALFIT MEANS “AUTHENTICITY”</h2>
      <br/>
      <p>Finding authenticity of a supplement is a major concern in India. About 70% of the supplements sold in India are either fake or from a grey area of import.We as a customer got the taste of fake supplements during several instances.</p>
      <p>And that’s when we decided that we will change the face of supplement market in India by delivering nothing but <b>“Authentic Products”.</b>
      </p>
      <br/>
      <h2 style={{textDecoration: 'underline', textAlign: 'center'}}>“BUY GENUINE, NOT CHEAP”</h2>
      <br/>
      <h3>HOW TO IDENTIFY GENUINE SUPPLEMENTS</h3>
      <br/>
      <ul>
        <li>Step 1: All the imported products have the importer labels of their <b>
        Brand Authorized Importer
        </b>
        . (List of authorized importers is attached)</li>
        <li>Step 2: Look for <b>

        Batch number and Expiry Information
        </b>
        , which is must in all products.</li>
        <li>Step 3: The date of import should be after the date of manufacturing.</li>
        <li>
        Step 4: Ask for the <b>

        Tax Paid Retail Invoice
        </b>
         from the reseller.
        </li>
        <li>
        Step 5: If the importer has their own 
        <b>

        Authentication App/Website
        </b>
        , authenticate you product by entering the required information.
        </li>
        <li>
        Step 6: You may ask for the 
        <b>
        Brand/Importer’s Certification of Authorization.
        </b>
        </li>
      </ul>
      <br/>
      <h3>“DON’T BUY” THE PRODUCT IF</h3>
      <br/>
      <li>The product is without the authorized importer’s label.</li>
      <li>The product does not contain batch number and expiry information.</li>
      <li>The product is too cheap to be true.</li>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(AuthenticityCertificate)
