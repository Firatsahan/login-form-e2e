describe("Login Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("başarılı giriş", () => {
    cy.get('[data-cy="form-email"]').type("test@test.com");
    cy.get('[data-cy="form-password"]').type("12345678");
    cy.get('[data-cy="form-terms"]').check();
    cy.get('[data-cy="form-submit"]').click();
    cy.get('[data-cy="success-page"]').should("be.visible");
  });

  it("email hatası", () => {
    cy.get('[data-cy="form-email"]').type("hataliemail");
    cy.get('[data-cy="form-password"]').type("12345678");
    cy.get('[data-cy="form-terms"]').check();
    cy.get('[data-cy="email-error"]').should("be.visible");
    cy.get('[data-cy="form-submit"]').should("be.disabled");
  });

  it("şifre hatası", () => {
    cy.get('[data-cy="form-email"]').type("test@test.com");
    cy.get('[data-cy="form-password"]').type("123");
    cy.get('[data-cy="form-terms"]').check();
    cy.get('[data-cy="password-error"]').should("be.visible");
    cy.get('[data-cy="form-submit"]').should("be.disabled");
  });

  it("şartlar kabul edilmedi", () => {
    cy.get('[data-cy="form-email"]').type("test@test.com");
    cy.get('[data-cy="form-password"]').type("12345678");
    cy.get('[data-cy="form-submit"]').should("be.disabled");
  });
});
