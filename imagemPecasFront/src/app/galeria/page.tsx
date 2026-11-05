'use client'

import { Template, ImageCard } from '@/componentes';
import { useState } from 'react';

export default function GaleriaPage() {

  const image1 = 'COLE_AQUI_A_URL_DA_IMAGEM_DA_PLACA_MAE';
  const image2 = 'COLE_AQUI_A_URL_DA_IMAGEM_DO_RESISTOR';

  const nome1 = 'Placa Mãe';
  const nome2 = 'Resistor';

  const [codigoImage, setCodigoImage] = useState<number>(2);
  const [urlImage, setUrlImage] = useState<string>(image2);

  const [nomeImage, setNomeImage] = useState<string>(nome2);

  function mudarImagem(){
    if(codigoImage == 1){
      setCodigoImage(2);
      setUrlImage(image2);
      setNomeImage(nome2);
    }else{
      setCodigoImage(1);
      setUrlImage(image1);
      setNomeImage(nome1);
    }
  }

  return (
    <Template>
      <button className="bg-gray-500" onClick={mudarImagem}>Clique para Mudar</button>
      <section className="grid grid-cols-5 gap-8">
        <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2026' src={urlImage}/>
        <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2026' src={urlImage}/>
        <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2026' src={urlImage}/>
      </section>
    </Template>
  );
}