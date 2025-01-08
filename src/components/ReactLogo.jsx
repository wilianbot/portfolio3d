import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/skyforge_weapon_art.glb')
    return (
        <Float floatIntensity={1}>
            <group position={[9, 7, 13]} scale={1} rotation={[-Math.PI / 2, 0, 9]} {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials['Material.001_NONE']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['None.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.UV_Material}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/skyforge_weapon_art.glb')

export default ReactLogo;
