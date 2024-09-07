<a name="readme-top"></a>

<div align="center">

<a href="https://github.com/GEMELX-TECHNOLOGY">
  <img width="300px" src="https://github.com/user-attachments/assets/8b7e2626-1f9b-4a0b-8a89-974732d2b7c4" alt="Logo" />
</a>

Copyright (c) 2024 GEMLEX TECHNOLOGY

## ¿Quienes somos?
  GEMELX-TECHNOLOGY creamos experiencias y ayudamos a los negocios a expandir su publico en la era digital
  
<details>
  <summary>Tabla de contenidos</summary>
  
[¿Quienes Somos?](#quienes-somos) <br/>
[¿Como inicializar el proyecto?](#como-inicializar-el-proyecto) <br/>
[¿Como levantar el proyecto?](#como-levantar-el-proyecto)
  
</details>
</div>




# ¿Como inicializar el proyecto? 
> [!IMPORTANT]
> Debes instalar absolutamente todo lo mostrado en este archivo

## Clonar Repositorio
- Abre una ventana `cmd`
- Navega hacia la carpeta en la que se guardara el proyecto:
  <div align="center"> 
    <img width="800"  src="https://github.com/user-attachments/assets/5853a2af-3f34-4487-98c1-5c7507ff8a4e"/>
  </div>
  
- Ingresa el siguiente comando:
  ```
  git clone https://github.com/GEMELX-TECHNOLOGY/Integradora-I.git
  ```
- Ingresa a la carpeta "Integradora-I"
  ```
  cd Integradora-I
  ```
- Abre el proyecto en *VsCode*
> [!TIP]
> Utiliza el siguiente comando: `code .`

## Back-End
  - Cambia al branch `Start-Project` <br/>
  Debes abrir una terminal en VsCode
  ```
    git checkout Start-Project
  ```

- Crea el entorno virtual
  ```
  python -m venv .venv
  ```
  
- Activa el `entorno virtual`: </br>
  Presionala tecla `f1` para abrir el menu
<div align="center"> 
<img width="800"  src="https://github.com/user-attachments/assets/5b91a0e1-b175-4932-b121-8b6e03386505"/>
<img width="800"  src="https://github.com/user-attachments/assets/6721068d-caf8-4135-a7b2-a91f7db37d1f"/>
<img width="800"   src="https://github.com/user-attachments/assets/161dfe75-40d1-4a10-aa74-2963c41d6511"/>

</div>  

> [!NOTE]
>Si te sale un errror debes cerrar y abrir una terminal nueva.
  
  
- Instala los requerimientos que se encuentran en el archivo `requirements.txt`
  ```
  python install -r requirements.txt
  ```

    
## Front-End
- Instala <a href="https://nodejs.org/en">NodeJs</a>
- Verica que se haya instalado correctamente
  ```  
    node -v
    npm -v
  ```
<div align="center"> 
<img width="800"  src="https://github.com/user-attachments/assets/34815e8a-63d8-44b4-b58a-9850957d8765"/>
</div>
<br/>

- Divide la terminal `ctrl+shift+5`:
    <div align="center"> 
    <img width="800"  src="https://github.com/user-attachments/assets/1f8fe418-0320-4ab1-b722-16ee8eec63ee"/>
  </div>
  
- Cambia al branch `v1.0.0` <br/>
  
  ```
    git checkout v1.0.0
    git branch
  ```
  
  <div align="center"> 
    <img width="800"  src="https://github.com/user-attachments/assets/06aea42b-6be1-4481-aa3f-5c26ddd44f17"/>
  </div>
  
- Instala las dependencias de react `node_modules`
  ```
  cd client
  npm install
  ```
    <div align="center"> 
    <img width="800"  src="https://github.com/user-attachments/assets/fe3d460d-6fa7-4f58-b778-ea2b9c6a145c"/>
  </div>

# ¿Como levantar el proyecto?

## Back-end
```
cd backend
python manage.py runserver
```
<div align="center"> 
    <img width="800"  src="https://github.com/user-attachments/assets/1055a3d6-f7ef-4200-9986-478146a93d78"/>
</div>

## Front-End
```
npm run dev
```
<div align="center"> 
    <img width="800"  src="https://github.com/user-attachments/assets/765b84b9-638d-4086-8408-043c19783550"/>
</div>


<p align="right">(<a href="#readme-top">volver arriba</a>)</p>
