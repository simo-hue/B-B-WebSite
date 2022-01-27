(async () => {

  const { value: accept } = await Swal.fire({
    title: 'Termini e Condizioni',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'Accetto I Termini E Le Condizioni',
    confirmButtonText:
      'Continue <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'Per continuare sul nostro sito devi Accettare Le Nostre condizioni'
    }
  })
  
  if (accept) {
    Swal.fire('Grazie Per Aver Deciso Di Accettare I Termini E Le Nostre Condizioni')
  }
  
  
  })()