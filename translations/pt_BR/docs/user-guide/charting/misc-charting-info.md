# Informações diversas sobre charts
---

## Cor das notas
Se quiser mudar a cor das notas, é possível! Abra o arquivo `song.tmb` em um editor de texto, e adicione as variáveis `note_color_start` e `note_color_end` ao final.
```
... "timesig": 2, "tempo": 100, "UNK1": 0} 
// Antes ^
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.0, 0.0, 0.0], "note_color_end": [1.0, 1.0, 1.0]}
// Depois ^
```
O formato das cores é em RGB1, e o exemplo acima começa em preto e acaba em branco. Para converter as cores neste formato, use um seletor de cores como o <https://rgbacolorpicker.com/> e obtenha os valores RGB das que deseja usar. Digamos que queira usar um roxo maroto, sendo a cor `rgb(84, 14, 50)`. Para usá-la, divida tudo por `255` e a coloque nas variáveis.
```
... "timesig": 2, "tempo": 100, "UNK1": 0, "note_color_start": [0.329411765, 0.0549019608, 0.196078431], "note_color_end": [0.329411765, 0.0549019608, 0.196078431]}
```
Agora as notas vão começar e acabar com esse roxo maneiro!


## Outras informações do .trombackground

### Renderizar sobre o Tromboner (personagem)
Se estiver fazendo um `.trombackground`, você pode renderizar SOBRE o tromboner configurando a profundidade da câmera para 1

### Adicionar um Tromboner na cena
Se estiver fazendo um `.trombackground` e quiser movimentar o jogador, adicione o prefab `Prefabs/Tromboner` ao seu plano de fundo.

Quando o jogo estiver carregado, ele será substituído por um clone idêntico ao jogador.

Você pode alterar também o modelo do jogador e a textura do trombone se não quiser que sejam iguais a do jogador atual.

(Use com a dica da profundidade da câmera acima para mudar totalmente como o personagem é renderizado!)