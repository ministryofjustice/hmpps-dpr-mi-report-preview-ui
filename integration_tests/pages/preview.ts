import Page, { PageElement } from './page'

export default class PreviewPage extends Page {
  constructor() {
    super('Preview Reports')
  }

  uploadDefinitionInput = (): PageElement => cy.get('#uploadDefinition')

  uploadDefinitionSubmit = (): PageElement => cy.get('#upload-definition-form-submit')
}
