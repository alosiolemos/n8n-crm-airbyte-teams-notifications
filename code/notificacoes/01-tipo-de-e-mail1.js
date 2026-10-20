// Pegamos o e-mail da pessoa de contato do lead
const email =
  $('PIPEDRIVE1').first().json.body.email_da_pessoa_de_contato_do_lead
    ?.toLowerCase() || "";
// Lista de domínios pessoais conhecidos
const personalDomains = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "yahoo.com",
  "yahoo.com.br",
  "bol.com.br",
  "terra.com.br",
  "uol.com.br",
  "msn.com",
  "aol.com",
  "protonmail.com",
  "zoho.com",
  "ymail.com",
  "gmx.com",
  "me.com"
];

// Função para extrair domínio do e-mail
function getDomain(email) {
  const parts = email.split("@");
  return parts.length > 1 ? parts[1] : "";
}

const domain = getDomain(email);

// Checa se domínio está na lista
let tipo = "Domínio Corporativo";
if (personalDomains.some(d => domain.includes(d))) {
  tipo = "Domínio ser pessoal";
}

return {
  email,
  dominio: domain,
  classificacao: tipo
};
