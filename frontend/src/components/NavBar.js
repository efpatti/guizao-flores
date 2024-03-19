import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center } from "@chakra-ui/react"
function NavBar() {
  const navData = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Sobre nós",
      href: "about"
    },
    {
      name: "Catálogo",
      href: "catalogo"
    },
    {
      name: "Contato",
      href: "contact"
    },
    {
      name: "Cadastre-se",
      href: "signup"
    },
    {
      name: "Entrar",
      href: "signin"
    }
  ]
  return (
    <Center>
      <Breadcrumb>
        {navData.map((item, i) => (
          <BreadcrumbItem key={i}>
            <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Center>

  )
}

export default NavBar