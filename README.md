# 🎟️ **Gerador de Senhas** 🧾

Este aplicativo permite gerar diferentes tipos de senhas para filas: **Normal**, **Prioritário** e **Alta Prioridade**. A cada clique, uma nova senha é gerada, com o número aumentando de forma ordenada para cada tipo.

## 🚀 **Como Funciona?**

1. **Gerar Senha:**
   - Clique no botão correspondente para gerar a próxima senha de cada tipo:
     - **Normal**: Senha padrão para qualquer usuário.
     - **Prioritário**: Senha para usuários com prioridade.
     - **Alta Prioridade**: Senha para usuários com alta prioridade.

2. **Exibição:**
   - As senhas geradas seguem o formato: **[Tipo]NN** (ex: "N01", "P02", "AP03").
   - As senhas aumentam automaticamente a cada clique.

### Tipos de Senhas:
- **Normal (N)**: Para qualquer usuário na fila.
- **Prioritário (P)**: Para usuários com prioridade (ex: idosos, gestantes).
- **Alta Prioridade (AP)**: Para situações de emergência ou atendimento urgente.

## ⚙️ **Como Usar?**

### 🚀 **Testar no Snack**

Você pode testar o aplicativo diretamente no [Snack](https://snack.expo.dev/), uma plataforma online para rodar projetos **React Native**.

- Basta copiar o código fornecido abaixo e colá-lo no Snack.

### 🌟 Destaques do Código

**useState:**
Utilizado para controlar o número de senhas geradas para cada tipo (Normal, Prioritário e Alta Prioridade). Cada vez que o usuário clica em um botão, o número de senhas é atualizado automaticamente.

**Formatando Senhas:**
A função formatarSenha assegura que as senhas sejam exibidas no formato correto, incluindo o preenchimento de zeros à esquerda para garantir que a exibição tenha sempre dois dígitos.

**Gerador de Senhas:**
Quando o usuário clica em um dos botões, a senha correspondente é gerada e exibida no formato adequado. O contador de senhas é incrementado a cada clique.

- Veja o aplicativo em ação sem precisar de instalações.

