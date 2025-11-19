import { Injectable, NotFoundException } from '@nestjs/common';
import { PassThrough } from 'stream';

@Injectable()
export class StudentService {
    private students=[
        {id: 1, name: 'Ayesha', age: 28},
        {id: 2, name: 'Ali', age: 25},
        {id: 3, name: 'Ammar', age: 29},
        {id: 4, name: 'Rayyan', age: 1}
    ];

// GET region 
    getAllStudents(){
        return this.students;
    }

    getStudentById(id: number){
        const studnet = this.students.find((s) => s.id === id);

        if(!studnet)
            throw new NotFoundException('Student not found!');

        return studnet;
    }

// POST region 
    createStudent(data: {name: string; age:number}){
        const newStudent = {id: Date.now(), ...data, };

        this.students.push(newStudent);
        return newStudent;
    }

// PUT 
    updateStudent(id: number, data: {name: string; age: number}){
        const index = this.students.findIndex((s) => s.id === id);

        if(index === -1)
            throw new NotFoundException('Studnet Not Found');

        this.students[index] = {id, ...data,};

        return this.students[index];
    }

// PATCH 
    patchStudent(id: number, data: Partial<{name: string; age: number}>){
        const student = this.getStudentById(id);

        Object.assign(student, data);

        return student;
    }

// DELETE
    deleteStudent(id: number){
        const index = this.students.findIndex((s) => s.id === id);

        if(index === -1)
            throw new NotFoundException('Studnet Not Found');

        const deleted = this.students.splice(index,1);// starting from index and remove 1 element 

        return {message: 'Student Deleted', student: deleted[0]};
    }
}
