global class EstudianteController {
    @AuraEnabled
    public static void createStudent(String firstName, String lastName, String cedula, String universidad, String valor, String nivel) {
        Estudiante__c newStudent = new Estudiante__c(
            FirstName__c = firstName,
            LastName__c = lastName,
            Cedula__c = cedula,
            FirstName__c = universidad,
            LastName__c = valor,
            Cedula__c = nivel
        );
        insert newStudent;
    }
}
