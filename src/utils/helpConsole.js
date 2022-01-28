export const helpConsole = () => {
  const first = 'Спасибо, что заглянули сюда'
  const second = 'Улыбнитесь - это делает чуть-чуть счастливее'
  const third = 'Сегодня нам 3 года!'
  const end = 'С Днём Рождения, ICWT'

  const styles = 'color: green; font: 1.2rem/1 Tahoma;'

  console.log ( '%c%s', styles, first );
  setTimeout(() => {
    console.log ( '%c%s', styles, second );
  }, 2000)
  setTimeout(() => {
    console.log ( '%c%s', styles, third );
  }, 4000)
  setTimeout(() => {
    console.log ( '%c%s', styles, end );
  }, 6000)

}
