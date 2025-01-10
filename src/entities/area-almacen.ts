import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Almacen } from "./almacen";
import { UbicacionProducto } from "./ubicacion-producto";

@Entity('areas_almacen')
export class AreaAlmacen {
    @PrimaryGeneratedColumn({ name: 'id_area_almacen' })
    idAreaAlmacen: number;

    @ManyToOne(() => Almacen, (almacen) => almacen.areasAlmacen)
    @JoinColumn({ name: 'id_almacen' })
    almacen: Almacen;

    @Column({ name: 'nombre_area' })
    nombreArea: string;

    @Column({ name: 'descripcion'})
    descripcion: string;

    @Column({ name: 'nivel_estanteria' })
    nivelEstanteria: number;

    @Column({ name: 'pasillo' })
    pasillo: number;

    @Column({ name: 'superficie_area', type: 'numeric' })
    superficieArea: number;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @OneToMany(() => UbicacionProducto, (ubicacionProducto) => ubicacionProducto.areaAlmacen)
    ubicacionesProducto: UbicacionProducto[];
}