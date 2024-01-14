class ubahkonversi {
  static handlerhasil(bilangan, kebilangan, value) {
    switch (bilangan) {
      case "decimal":
        return ubahkonversi.desimalkelain(value, kebilangan);
      case "binary":
        return ubahkonversi.binarykelain(value, kebilangan);
      case "octal":
        return ubahkonversi.octalkelain(value, kebilangan);
      case "hexadecimal":
        return ubahkonversi.hexadesimalkelain(value, kebilangan);
    }
  }

  static desimalkelain(value, kelain) {
    const val = parseInt(value, 10);
    switch (kelain) {
      case "binary":
        return (val >>> 0).toString(2);
      case "octal":
        return val.toString(8);
      case "hexadecimal":
        return val.toString(16).toUpperCase();
      default:
        return null;
    }
  }

  static binarykelain(value, kelain) {
    const val = parseInt(value, 2);
    switch (kelain) {
      case "decimal":
        return val.toString(10);
      case "octal":
        return val.toString(8);
      case "hexadecimal":
        return val.toString(16).toUpperCase();
      default:
        return null;
    }
  }
  static octalkelain(value, kelain) {
    const val = parseInt(value, 8);
    switch (kelain) {
      case "decimal":
        return val.toString(10);
      case "binary":
        return (val >>> 0).toString(2);
      case "hexadecimal":
        return val.toString(16).toUpperCase();
      default:
        return null;
    }
  }
  static hexadesimalkelain(value, kelain) {
    const val = parseInt(value, 16);
    switch (kelain) {
      case "decimal":
        return val.toString(10);
      case "binary":
        return val.toString(2);
      case "octal":
        return val.toString(8);
      default:
        return null;
    }
  }
}

export default ubahkonversi;
