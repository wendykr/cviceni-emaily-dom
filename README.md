# Doporučené úložky na doma

Domácí úkol pro kurz JavaScript 2 od Czechitas.

# 1. E-maily pomocí DOM elementů

Budeme pokračovat v naší aplikaci zobrazující přečtené a nepřečtené e-maily. Nejdříve celý kód převedeme na komponenty.

- Vytvořte si repozitář ze šablony [cviceni-emaily-dom](https://github.com/Czechitas-podklady-WEB/cviceni-emaily-dom).
- V separátní složce vytvořte komponentu `Email`. Komponenta bude očekávat následující *props*:

```javascript
const { senderName, subject, time, unread } = props;
```

Zařiďte, aby komponenta vracela DOM element.
- Do složky s komponentou vložte také styly a obrázky související s e-mailem.
- V hlavním souboru `index.js` upravte funkci `renderSection` tak, aby používala komponentu `Email` a metodu `append`.
- Zkontrolujte, že aplikace funguje správně, zobrazuje správné e-maily ve správných složkách se správnými ikonami.

# 2. E-maily - načítání dat

V aplikaci *E-maily* vyrobíme komponentu pro zobrazování složek pro přečtené a nepřečtené zprávy.

- Ve vašem projektu předělejte metodu `renderSection` na komponentu `EmailSection`. Komponenta bude očekávat *props* ve tvaru:

```javascript
const { heading, emails, folder } = props;
```

V *props* `folder` očekáváme hodnoty `'read'` nebo `'unread'`.
- Založte pro komponentu složku, přesuňte CSS styly, jak už to znáte. Komponenta by měla vyrobit celou jednu sekci s e-maily. V HTML nám pak zůstane jen prázdný element `#app`.
- V hlavním souboru použijte komponentu k zobrazení obou sekcí.
- Zařiďte, aby si komponenta `EmailSection` stahovala vlastní data. Do *props* s názvem `emails` vložte jako výchozí hodnotu prázdný seznam.

# 3. E-maily - detail

Aplikaci *E-maily* rozšíříme tak, aby zobrazovala detail e-mailu. Když uživatel klikne na ikonu obálky, e-mail se rozbalí a zobrazí textový obsah stažený z API.

- Abychom mohli v komponentě `Email` stahovat obsah e-mailu, potřebujeme přidat dvě nové *props*.

```javascript
const { id, senderName, subject, time, unread, body } = props;
```

- Upravte komponentu `EmailSection` tak, aby komponentě `Email` posílala `id` e-mailu. Základní API endpoint v e-mailech nevrací `body`, takže do *props* zatím pošlete nějaký testovací text.
- V komponentě `Email` zaříďte, aby se na hlavní element přidala třída `email--expand` v případě, že *props* body není prázdná (`undefined`). Text v `body` zakomponujte do prvku `.email__body`.
- Vyzkoušejte, že pokud do komponenty `Email` pošlete `body`, e-mail bude rozbalený. Pokud `body` nepošlete, e-mail bude zobrazovat pouze hlavičku.
- Nyní stačí zařídit, aby se tělo e-mailu stáhlo z API. Přidejte posluchač události na tlačítko s obálkou. Při kliknutí na obálku zkontrolujte, jestli je *props* `body` prázdná. Pokud ano, stáhněte detail e-mailu dle [dokumentace](https://apps.kodim.cz/daweb/trening-api/docs/e-mailove-api#detail-e-mailu-get). Pomocí `replaceWith` aktualizujte komponentu a pošlete jí získané `body`.
- Pokud při kliknutí na obálku už `body` máme, chceme e-mail zase sbalit. Aktualizujte tedy komponentu tak, že jí pošlete *props* bez `body`.
