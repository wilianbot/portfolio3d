
import React, {useEffect, useRef} from 'react'
import { Float, useGLTF } from '@react-three/drei'
import {gsap} from "gsap";

const Rings = (props) => {
    const { nodes, materials } = useGLTF('/models/ship_in_a_bottle.glb')
    const groupRef = useRef();

    useEffect(() => {
        if (groupRef.current) {
            gsap.to(groupRef.current.position, {
                y: groupRef.current.position.y + 2,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        }
    }, []);

    return (
        <Float floatIntensity={1} >
            <group ref={groupRef} rotation={[-Math.PI / 2, 0, -8]} scale={0.005} position={[-13, 7, 0]} {...props} dispose={null}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[-20.537, -129.331, 36.195]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={277.238}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.sea_mer_0.geometry}
                            material={materials.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.sea_fond_0.geometry}
                            material={materials.fond}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.plaque_export_plaqueexport_baked_material_0.geometry}
                        material={materials.plaqueexport_baked_material}
                        position={[0.036, -209.121, -130.619]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.support_export_supportexport_baked_material001_0.geometry}
                        material={materials['supportexport_baked_material.001']}
                        position={[0, -2.017, -61.696]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.bottle_export001_bottle_inside_0.geometry}
                        material={materials.bottle_inside}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.boat_export_veliero001_baked_material_0.geometry}
                        material={materials.veliero001_baked_material}
                        position={[0, -188.183, 39.115]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        scale={100.324}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cap_export_capexport_baked_material_0.geometry}
                        material={materials.capexport_baked_material}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.bottle_export_bottleexport_baked_material_0.geometry}
                        material={materials.bottleexport_baked_material}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                </group>
            </group>
        </Float>
    )
}

useGLTF.preload('/models/ship_in_a_bottle.glb')

export default Rings;
