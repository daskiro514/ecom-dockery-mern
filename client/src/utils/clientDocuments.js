import { fileUrl } from "./fileUrl"

export const documenetsPendingCheck = client => {
  var pendingDocumentsNumber = 0
  if (client.einVerificationLetterStatus === 'Pending') pendingDocumentsNumber++
  if (client.articlesOfOrganizationStatus === 'Pending') pendingDocumentsNumber++
  if (client.w9Status === 'Pending') pendingDocumentsNumber++
  if (client.bankCardStatus === 'Pending') pendingDocumentsNumber++
  if (client.usDriversLicenseStatus === 'Pending') pendingDocumentsNumber++
  if (client.creditDebitCardFrontStatus === 'Pending') pendingDocumentsNumber++
  if (client.creditDebitCardBackStatus === 'Pending') pendingDocumentsNumber++

  if (pendingDocumentsNumber === 0) return 'All Documents Approved'
  else return `${pendingDocumentsNumber} Documents Are Pending`
}

export const getDocumentList = client => {
  var documents = []
  documents.push({ 
    name: 'W8 or W9', 
    path: fileUrl + client['w9'],
    keyInDB: 'w9',
    status: client.w9Status,
    type: (client.w9.split('.').pop().toLowerCase() === 'png' || client.w9.split('.').pop().toLowerCase() === 'jpg' || client.w9.split('.').pop().toLowerCase() === 'jpeg') ? 'image' : 'document'
  })
  documents.push({ 
    name: 'EIN Verification letter', 
    path: fileUrl + client['einVerificationLetter'], 
    keyInDB: 'einVerificationLetter',
    status: client.einVerificationLetterStatus,
    type: (client.einVerificationLetter.split('.').pop().toLowerCase() === 'png' || client.einVerificationLetter.split('.').pop().toLowerCase() === 'jpg' || client.einVerificationLetter.split('.').pop().toLowerCase() === 'jpeg') ? 'image' : 'document'
  })
  documents.push({ 
    name: 'EIN Verification letter', 
    path: fileUrl + client['articlesOfOrganization'], 
    keyInDB: 'articlesOfOrganization',
    status: client.articlesOfOrganizationStatus,
    type: (client.articlesOfOrganization.split('.').pop().toLowerCase() === 'png' || client.articlesOfOrganization.split('.').pop().toLowerCase() === 'jpg' || client.articlesOfOrganization.split('.').pop().toLowerCase() === 'jpeg') ? 'image' : 'document'
  })
  documents.push({ 
    name: 'EIN Verification letter', 
    path: fileUrl + client['bankCard'], 
    keyInDB: 'bankCard',
    status: client.bankCardStatus,
    type: (client.bankCard.split('.').pop().toLowerCase() === 'png' || client.bankCard.split('.').pop().toLowerCase() === 'jpg' || client.bankCard.split('.').pop().toLowerCase() === 'jpeg') ? 'image' : 'document'
  })
  documents.push({ 
    name: 'EIN Verification letter', 
    path: fileUrl + client['usDriversLicense'], 
    keyInDB: 'usDriversLicense',
    status: client.usDriversLicenseStatus,
    type: (client.usDriversLicense.split('.').pop().toLowerCase() === 'png' || client.usDriversLicense.split('.').pop().toLowerCase() === 'jpg' || client.usDriversLicense.split('.').pop().toLowerCase() === 'jpeg') ? 'image' : 'document'
  })
  documents.push({ 
    name: 'EIN Verification letter', 
    path: fileUrl + client['creditDebitCardFront'], 
    keyInDB: 'creditDebitCardFront',
    status: client.creditDebitCardFrontStatus,
    type: (client.creditDebitCardFront.split('.').pop().toLowerCase() === 'png' || client.creditDebitCardFront.split('.').pop().toLowerCase() === 'jpg' || client.creditDebitCardFront.split('.').pop().toLowerCase() === 'jpeg') ? 'image' : 'document'
  })
  documents.push({ 
    name: 'EIN Verification letter', 
    path: fileUrl + client['creditDebitCardBack'], 
    keyInDB: 'creditDebitCardBack',
    status: client.creditDebitCardBackStatus,
    type: (client.creditDebitCardBack.split('.').pop().toLowerCase() === 'png' || client.creditDebitCardBack.split('.').pop().toLowerCase() === 'jpg' || client.creditDebitCardBack.split('.').pop().toLowerCase() === 'jpeg') ? 'image' : 'document'
  })

  return documents
}