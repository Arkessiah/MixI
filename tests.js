// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Mix I', () => {
  it('La variable texto es igual a marvel mola!', () => {
    expect(texto).to.equal( 'marvel mola!' );
  });

  it('La variable textoTransform no ', () => {
    expect(textoTransform).to.equal( 'm-a-r-v-e-l- -m-o-l-a-!' );
  });

});
