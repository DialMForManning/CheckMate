const expenseFormStyle = () => {
  return({
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {
      position                   : 'absolute',
      margin                     : '0 auto',
      width                      : '520px',
      height                     : '220px',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '5px',
      outline                    : 'none',
      padding                    : '0'
    }
  });
};

export default expenseFormStyle;
