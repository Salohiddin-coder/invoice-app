import { Container, InvoicesHeader, InvoicesList, SiteBar } from "../../components";

export const Invoices = () => {
  return (
    <Container>
      <SiteBar />
      <InvoicesHeader />
      <InvoicesList />
    </Container>
  )
}