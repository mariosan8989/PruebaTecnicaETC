Feature: Iniciar sesión en el sistema

  Scenario: El usuario Obtiene 3 peliculas de Terror y Obtiene la Url En Curso
    Given el usuario está en la página de login y Ingresa las Credenciales
    When el usurio Selecciona Un Perfil
    When el usuario Selecciona el menu Peliculas
    When el usaurio selecciona un genero
    When el usuario Obtiene los nombres de las Peliculas y se Imprime en el Reporte html
    Then se obtiene la Url y se Imprime en el Reporte html