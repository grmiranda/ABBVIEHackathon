# ABBVIEHackathon

A solução proposta é um conjunto composto de um APP Android/IOS e um website.
O objetivo principal é facilitar a unificação das informações sobre exames,
consultas e receitas de um paciente em um único banco de dados.

Para facilitar a utilização do sistema, não é necessário que apenas o médico possa enviar as informações do paciente,
através do app, o paciente pode enviar para o banco de dados informações sobre a consulta que teve juntamente com uma foto do laudo,exame/receita.
Atravez do app, o paciente tem acesso a um chat com o médico que fez uma consulta, a fim de tirar dúvidas.
O usuário do app pode também buscar clínicas e médicos próximos que estão cadastrados no sistema.
Além de ter todas as suas informações offline. E poder gerar um código temporário que dá acesso ao médico ao seu histórico médico.

O Médico acessa o sistema pelo site, nele ele pode monitorar seus pacientes, responder as dúvidas pelo chat, 
e adicionar comentários que achar pertinente sobre uma consulta/exame/receita. O médico também pode colocar no banco de dados as
informações da consulta. Desta forma, o banco de dados é povoado tanto pelo médico quanto pelo paciente, tirando obrigações unilaterais.
O médico pode inserir o código do paciente, e enquanto ele for válido, ele poderá ver todo o histórico médico do paciente, 
juntamente com as fotos.

Para facilitar a adesão das clínicas e médicos ao sistema, promomos uma API. Assim, basta que no sistema que o médico,clínica,hospital,SUS
já utilizam, eles solicitarem uma atualização para que as informações geradas também sejam enviadas para o banco de dados do sistema.
