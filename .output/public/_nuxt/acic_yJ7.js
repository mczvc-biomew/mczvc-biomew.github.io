var je=Object.defineProperty;var qe=(v,e,t)=>e in v?je(v,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):v[e]=t;var ue=(v,e,t)=>qe(v,typeof e!="symbol"?e+"":e,t);import{a as Y,O as Xe,k as me,m as ne,q as j,U as De,h as k,r as Ke,H as Je,N as Ze,s as Re,C as Ee,l as $e,t as et,u as ye,v as tt,D as st,E as it,b as ot,w as at,x as nt,c as rt,M as lt,y as ct,z as dt,j as oe,V as T,J as be,K as ft,L as ht,X as ut,Y as pt,Z as gt,o as mt,_ as vt,$ as xt,a0 as wt,S as _t,P as yt,W as bt,p as pe,a1 as Mt,a2 as St,a3 as Ct,a4 as Dt,a5 as Me}from"./Dj-vhf08.js";import{O as Rt}from"./CsvSSBkb.js";import{r as Et,f as Pt,l as Tt,c as Lt,b as At,e as Ut,o as Bt,g as ae}from"./XCSXZhVb.js";import{u as Se}from"./CkMHc99j.js";const zt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class q{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const It=new Xe(-1,1,1,-1,0,1);class Nt extends me{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const Ft=new Nt;class Pe{constructor(e){this._mesh=new Y(Ft,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,It)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gt extends q{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof j?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=De.clone(e.uniforms),this.material=new j({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pe(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ce extends q{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const u=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let m,L;this.inverse?(m=0,L=1):(m=1,L=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),l.buffers.stencil.setFunc(u.ALWAYS,m,4294967295),l.buffers.stencil.setClear(L),l.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(u.EQUAL,1,4294967295),l.buffers.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),l.buffers.stencil.setLocked(!0)}}class Ht extends q{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new k);this._width=i.width,this._height=i.height,t=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gt(zt),this.copyPass.material.blending=Ze,this.clock=new Re}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let u=0,l=this.passes.length;u<l;u++){const m=this.passes[u];if(m.enabled!==!1){if(m.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(u),m.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),m.needsSwap){if(i){const L=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(L.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),X.setFunc(L.EQUAL,1,4294967295)}this.swapBuffers()}Ce!==void 0&&(m instanceof Ce?i=!0:m instanceof Ht&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new k);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,u=this._height*this._pixelRatio;this.renderTarget1.setSize(i,u),this.renderTarget2.setSize(i,u);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(i,u)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wt extends q{constructor(e,t,i=null,u=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=u,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,i){const u=e.autoClear;e.autoClear=!1;let l,m;this.overrideMaterial!==null&&(m=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=m),e.autoClear=u}}const ge={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;

		void main() {

			vUV = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			float dist = radius * 0.66;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height );
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				r = blendColour( r, colour.r, blending );
				g = blendColour( g, colour.g, blending );
				b = blendColour( b, colour.b, blending );

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				gl_FragColor = vec4( r, g, b, 1.0 );

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};class Ot extends q{constructor(e){super(),this.uniforms=De.clone(ge.uniforms),this.material=new j({uniforms:this.uniforms,fragmentShader:ge.fragmentShader,vertexShader:ge.vertexShader});for(const t in e)e.hasOwnProperty(t)&&this.uniforms.hasOwnProperty(t)&&(this.uniforms[t].value=e[t]);this._fsQuad=new Pe(this.material)}render(e,t,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Vt={key:0,id:"picosoft-anim",class:"fixed top-0 z-0"},Jt={__name:"PicosoftAnim",setup(v){const e=Et(null),t={grid:{segmentsX:123,segmentsY:40},texture:{path:"/images/Picosoft-brand.png",res:new k(2906,896)},nodes:{count:423,connectionFactor:.1723,maxConnection:69,speedFast:9,speedSlow:2,getBoundingMinDist:()=>t.nodes.getBoundingMaxDist()/2,getBoundingMaxDist:()=>Math.max(50,Math.floor(window.innerWidth*.05)),section:{getWidth:()=>t.nodes.getBoundingMaxDist()*2,getHeight:()=>t.nodes.getBoundingMaxDist()*2,getDivisionsX:()=>Math.floor((Math.max(300,window.innerWidth)+2*t.nodes.section.getWidth())/t.nodes.section.getWidth()),getDivisionsY:()=>Math.floor((Math.max(600,window.innerHeight)+2*t.nodes.section.getHeight())/t.nodes.section.getHeight())}},colors:{node:9211020,line:14540253,bg:16119260}},i={};function u(f,r){const o=f.width/f.height,a=r.width/r.height;let c={x:1,y:1},b={x:0,y:0};return o>a?(c.x=a/o,b.x=(1-c.x)*.5):(c.y=o/a,b.y=(1-c.y)*.5),{scale:c,offset:b,canvasSize:f,imageSize:r}}function l(f,r,o,a,c){return f>32?a+(c-a)*((f-r)/(o-r)):f}function m(f,r,o,a,c){return a+(c-a)*((f-r)/(o-r))}function L(f,r){f.length()>r&&(f.normalize(),f.multiplyScalar(r))}class X{constructor(r,o,a,c,b,A,U,w){ue(this,"boundingX");ue(this,"boundingY");this.pos=new T(r,o,a),this.dir=new T(c,b,A),this.speed=this.dir.length(),this.vel=this.dir.clone(),this.acceleration=new T,this.scale=oe.randFloat(.5,1.025)+2,this.moveFn=U,this.updateFn=w}move(){this.moveFn&&this.moveFn(this)}update(r){this.updateFn&&r&&this.updateFn(this,r)}}async function Te(){const r=await(await fetch("/images/glow_image.pcm")).arrayBuffer(),o=new DataView(r),a={idSize:{offset:0},imageType:{offset:1},palleteSize:{offset:2},palleteEntryDepth:{offset:4},x:{offset:6},width:{offset:8},y:{offset:10},height:{offset:12},mapType:{offset:14},colorDepth:{offset:16},descriptor:{offset:17},alpha:{offset:18},r:{offset:20},g:{offset:24},b:{offset:28}};o.getUint8(a.idSize.offset,!0),o.getUint8(a.imageType.offset,!0),o.getUint16(a.palleteSize.offset,!0),o.getUint16(a.palleteEntryDepth.offset,!0),o.getUint16(a.x.offset,!0);const c=o.getUint16(a.width.offset,!0);o.getUint16(a.y.offset,!0);const b=o.getUint16(a.height.offset,!0);o.getUint16(a.mapType.offset,!0);const A=o.getUint8(a.colorDepth.offset,!0);o.getUint8(a.descriptor.offset,!0),o.getUint16(a.alpha.offset,!0),o.getUint32(a.r.offset,!0),o.getUint32(a.g.offset,!0),o.getUint32(a.b.offset,!0);const U=1*c*b*A/8,w=a.b.offset+4,S=new Uint8Array(U/4);for(let g=0;g<S.length;g+=4)S[g+0]=l(o.getUint8(w+g),0,5e3,-255,2200),S[g+1]=l(o.getUint8(w+g+1),0,5e3,-255,2200),S[g+2]=l(o.getUint8(w+g+2),0,5e3,-255,2200),S[g+3]=o.getUint8(w+g+3);const _=new St(S,c,b,Ct);return _.type=Dt,_.minFilter=Me,_.magFilter=Me,_.needsUpdate=!0,_}async function Le(){const f=i.view.scene;i.textures={};const{scale:r,canvasSize:o}=u({width:p(),height:x()},{width:3466,height:1876});i.textures.eggCo=await i.loaders.textureLoader.loadAsync(ae("/assets/img/mczvc-ws.png"));const a=new pe(o.width*r.x,o.height*r.y),c=new ye({map:i.textures.eggCo,transparent:!0,roughness:.9,metalness:1.8}),b=new Y(a,c);b.position.set(-p()*1.25+o.width*r.x,Math.max(Math.max(x()*.8,723)-o.height*r.y,o.height*r.y-380),200),f.add(b);const{scale:A,canvasSize:U}=u({width:p()*1.7,height:x()},{width:9772,height:4167});i.textures.emailMe=await i.loaders.textureLoader.loadAsync(ae("/assets/img/email-me-at.png"));const w=new pe(U.width*A.x,U.height*A.y),S=new Mt({color:6710886,map:i.textures.emailMe}),_=new Y(w,S);_.position.set(0,Math.max(x()*.8,683)-U.height*A.y,-10),f.add(_),i.geometry={...i.geometry||{},emailMe:_},i.positions={emailMe:new T().copy(_.position)};const g=i.loaders.textureLoader.load(t.texture.path);i.textures.logoTexture=g;const z=t.texture.res,[D,K]=P(),J=t.grid.segmentsX,re=t.grid.segmentsY,E=i.gridGeo=new pe(D,K,J,re);i.gridGeo=E;const R=i.gridMat=new j({vertexShader:`
uniform float uTime;
uniform vec2 uMouse;
varying float vHeight;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec3 p = position;
  float freq = 0.8;
  float amp = 22.0;
  float t = uTime * 0.6;

  p.z += sin((p.x * 0.008) * freq + t) * amp * (0.5 + 0.5 * uv.y);
  p.z += cos((p.y * 0.012) * freq - t*0.7) * (amp*0.6) * (0.5 + 0.5 * uv.x);
  // tiny mouse ripple
  float d = distance(uv, uMouse * 0.5 + vec2(0.25));
  p.z += (0.0 + 18.0 * exp(-12.0 * d) * sin(t*3.0));
  vHeight = p.z;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,fragmentShader:`
uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uTexResolution;
varying float vHeight;
uniform vec2 uMouse;
varying vec2 vUv;
uniform float uGlowIntensity;

vec2 containUV(vec2 uv, vec2 canvas, vec2 image) {
  float canvasRatio = canvas.x /canvas.y;
  float imageRatio = image.x / image.y;
  vec2 scale = vec2(1.0);
  vec2 offset = vec2(0.0);

  if (canvasRatio > imageRatio) {
    // Canvas is wider to fit by height
    scale.x = imageRatio / canvasRatio;
    offset.x = (1.0 - scale.x) * 0.5;
  } else {
    // Canvas is taller -> fit by width
    scale.y = canvasRatio / imageRatio;
    offset.y = (1.0 - scale.y) * 0.5;
  }

  return uv * scale + offset;
}

void main(){
  // texturing
  // Compute "contain" UV
  vec2 contained = containUV(vUv, uResolution, uTexResolution);

  vec4 tex = vec4(0.0);//texture2D(uTexture, vUv);
  if (contained.x >= 0.0 && contained.x <= 1.0 && contained.y >= 0.0 && contained.y <= 1.0) {
    tex = texture2D(uTexture, contained);
  }
  // color ramp based on height and y
  float h = (vHeight + 60.0) / 80.0;
  vec3 colA = vec3(0.02, 0.05, 0.08);
  vec3 colB = vec3(0.35, 0.55, 0.9);
  vec3 color = mix(colA, colB, smoothstep(0.0, 1.0, h));
  // soft vignette
  float vig = smoothstep(0.0, 0.8, length(vUv - vec2(0.5)));

  float dist = distance(vUv, uMouse);
  float glow = exp(-dist * 5.0) * 2.0;

  color *= (1.0 - vig*0.45) * glow * uGlowIntensity;
  vec3 finalColor = mix(color, tex.rgb, tex.a);
  gl_FragColor = vec4(finalColor, 0.85);
}`,uniforms:{uTime:{value:0},uMouse:{value:new k(-1,-1)},uTexture:{value:g},uTexResolution:{value:z},uResolution:{value:new k(...P())},uGlowIntensity:{value:1.65}},side:be,transparent:!0,depthWrite:!1});i.gridMat=R;function P(){const{scale:Z,canvasSize:$}=u({width:p()*2,height:x()},{width:z.x,height:z.y});return[$.width*Z.x,$.height*Z.y]}i.functions={computeTextureCanvasSize:P};const B=new Y(E,R);B.rotation.x=-.45,B.position.z=0,B.position.y=-x()+x()*.45,f.add(B)}const p=()=>window.innerWidth,x=()=>window.innerHeight;function Ae(){const f=new _t,r=new yt(45,window.innerWidth/window.innerHeight,1,2e3),o=new bt({antialias:!0,dithering:!1,depth:!0,depthBuffer:!0,depthSize:16}),a=new Rt(r,o.domElement);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(t.colors.bg,1),o.state.buffers.stencil.setTest(!1);const c=o.getContext();return c.disable(c.CULL_FACE),c.clearDepth(1),c.blendFunc(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA),c.enable(c.BLEND),r.position.z=1720,{scene:f,camera:r,renderer:o,controls:a}}async function Ue(f){const r=new $e;i.loaders={textureLoader:r};const{scene:o,camera:a,renderer:c,controls:b}=i.view=Ae();await Le(),f.appendChild(c.domElement),b.enabled=!1,b.update();let A=new et(18,8,150,20),U=new ye({metalness:1,roughness:0,envMapIntensity:1});const w=new Y(A,U);w.position.set(-p()*.85,x()*.8,100),w.scale.multiplyScalar(4),o.add(w);const S=new tt(c);S.compileEquirectangularShader(),st.onLoad=function(){S.dispose()};let _;i.textures.reflectionMapping=i.loaders.textureLoader.load(ae("/assets/img/equirectangular.png"),function(s){s.mapping=it,s.colorSpace=ot,_=S.fromEquirectangular(s)}),o.background=i.loaders.textureLoader.load(ae("/assets/img/about-me.jpg"));const g=new at(16777215,p()<600?220:p()<865?p()*.35:p()*.3125);g.position.set(p(),-x()/2,70),g.castShadow=!0,g.shadow.camera.zoom=4,o.add(g);const z=new nt(16777215,1);z.power=2e3,z.position.set(0,0,1e3),a.lookAt(0,x(),0),a.add(z);const D=Math.min(t.nodes.count,Math.floor(p()*.6)),K=()=>Math.min(window.innerWidth*t.nodes.connectionFactor*.9,t.nodes.maxConnection),J=new rt(2.6+(p()-1)*.0018,8,8),re=new lt({wireframe:!0,fog:!1,color:t.colors.node}),E=new ct(J,re,D);o.add(E);const R=new dt,P=Array.from({length:D},()=>new X(Math.random()*window.innerWidth,(Math.random()-.5)*window.innerHeight*2,Math.abs(Math.random()-.6)*K(),oe.randFloat(-.1,.25*Math.max(3,p()*.001)),oe.randFloat(-.1,.25*Math.max(3,x()*.001)),oe.randFloat(-.95,.4),s=>{s.dir.add(s.vel),s.dir.setLength(s.speed),s.pos.x=s.pos.x+s.dir.x,s.pos.y=s.pos.y+t.nodes.speedFast*.23*s.dir.y,s.pos.z=s.pos.z+s.dir.z,Math.abs(s.pos.x)>window.innerWidth*.8&&(s.pos.x=-p()*.25),Math.abs(s.pos.y)>x()&&(s.pos.y=-x(),s.dir.y=Math.abs(s.dir.y)*1.7),s.pos.z>150?s.dir.z=-23:s.pos.z<-60&&(s.dir.z=30)},(s,d)=>{let n=0;const h=new T,y=new T(0,0,0);for(let H of d){const C=s.pos.distanceTo(H.pos),te=C<t.nodes.getBoundingMinDist(),se=C<t.nodes.getBoundingMaxDist();if(H!==s&&se)if(h.add(H.pos),h.sub(s.pos),te){n++;const M=m(C,0,Math.max(35,window.innerWidth*.1),-.01,-.001);h.multiplyScalar(M);const N=m(C,p()*.013888889,Math.min(25,window.innerWidth*.017361111),-.01,.001);y.add(H.pos),y.add(s.pos),y.multiplyScalar(N)}else h.multiplyScalar(5e-4)}n>0&&(h.divideScalar(n),h.sub(s.vel),y.divideScalar(n),y.sub(s.dir),L(y,s.speed*2)),s.acceleration.add(h),i.time>=60&&s.acceleration.add(y),s.vel.add(s.acceleration),L(s.vel,s.speed),s.acceleration.multiplyScalar(0)})),B=new me,Z=new Float32Array(D*3),$=new Float32Array(D);B.setAttribute("position",new ne(Z,3)),B.setAttribute("alphas",new ne($,1));const I=new j({uniforms:{colorMap:{value:await Te()},sensitivity:{value:99/255},tint:{value:new T(14,244,251)}},vertexShader:`
    attribute vec4 color;
    attribute float alphas;
    // varying vec4 v_color;
    varying float v_alpha;

    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
      gl_PointSize = abs(position.z - 16.0)*alphas/120.0 * 32.0;
      // v_color = color;
      v_alpha = alphas;
    } `,fragmentShader:`
    precision mediump float;
    // varying vec4 v_color;
    varying float v_alpha;
    uniform float sensitivity;
    uniform vec3 tint;
    uniform sampler2D colorMap;

    void main() {
      vec4 texColor = texture2D(colorMap, gl_PointCoord);

      gl_FragColor = vec4(tint.rgb, v_alpha * sensitivity) * vec4(texColor.rgb, texColor.a);
    } `,transparent:!0,depthWrite:!1,depthTest:!1,side:be});I.blending=ft,I.blendSrc=ht,I.blendDst=ut,I.blendEquation=pt,I.transparent=!0,I.depthFunc=gt;const W=new mt(B,I);o.add(W),P.forEach((s,d)=>{R.position.copy(s.pos),R.scale.setScalar(s.scale),R.updateMatrix(),E.setMatrixAt(d,R.matrix)}),E.instanceMatrix.needsUpdate=!0;function Be(s){if(P.forEach(n=>{if(n.move(),s<=120){n.boundingX=Math.round(n.pos.x/t.nodes.section.getWidth())+1,n.boundingY=Math.round(n.pos.y/t.nodes.section.getHeight())+1;const h=F.get(n.boundingX)||new Map([[n.boundingY,{nodes:[]}]]),y=h.get(n.boundingY)||{nodes:[]};y&&y.nodes.push(n),h.set(n.boundingY,y),F.set(n.boundingX,h)}}),s>120)return new Promise(n=>{n()});const d=Math.floor(s%8);(d===0||d===1||d===3||d===4||d===6||d===7)&&F.entries().map(([,n])=>{n.entries().map(([,h])=>{h.nodes&&h.nodes.forEach(y=>{y.update(h.nodes)})}).forEach(()=>{})}).forEach(()=>{});for(const[,n]of F.entries())for(const[,h]of n.entries())h.nodes=[];return new Promise(n=>{n()})}const F=new Map;for(let s=0;s<t.nodes.section.getDivisionsX();s++){F.set(s,new Map);for(let d=0;d<t.nodes.section.getDivisionsY();d++){const n=t.nodes.section.getWidth(),h=t.nodes.section.getHeight();F.get(s).set(d,{x:s*n-n,y:d*h-h,w:n,h,nodes:[]})}}const ze=new vt({color:t.colors.line,transparent:!0,opacity:.6}),O=new me,Ie=new Float32Array(D*D*3);O.setAttribute("position",new xt(Ie,3));const Ne=new wt(O,ze);o.add(Ne);function Fe(s,d){var te,se;const n=s.attributes.position.array,h=d.attributes.position.array,y=d.attributes.alphas.array,H=K();let C=0;for(let M=0;M<D;M++){const N=(te=P[M])==null?void 0:te.pos,_e=N.z,ie=P[M].scale,de=255/(Math.sin(.1-ie*(1-_e*.01))*155),Ve=new Ee(1-de,de,de);R.scale.set(ie,ie,ie),R.position.copy(N),R.updateMatrix(),E.setMatrixAt(M,R.matrix);const fe=M*3;h[fe+0]=N.x,h[fe+1]=N.y,h[fe+2]=N.z,y[M]=(_e+90)/255;const Qe=P[M].pos;for(let he=M+1;he<D;he++){const Ye=(se=P[he])==null?void 0:se.pos;V.copy(Qe),Q.copy(Ye),V.distanceTo(Q)<H&&(n[C++]=V.x,n[C++]=V.y,n[C++]=V.z,n[C++]=Q.x,n[C++]=Q.y,n[C++]=Q.z)}E.setColorAt(M,Ve)}return s.setDrawRange(0,C/3),new Promise(M=>{M()})}const ee=i.composer=new kt(c),Ge=new Wt(o,a),He={shape:1,radius:p()<600?1:p()<865?2:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1},ke=new Ot(He);ee.addPass(Ge),ee.addPass(ke);let le=new k(.5,.5),G=new T;function We(){const s=(le.x-.5)*2,d=(le.y-.5)*2;G.x+=(s*p()*.75-G.x)*.08,G.y+=(d*x()*.9-G.y)*.08,a.position.x+=(G.x-a.position.x)*.06,a.position.y+=(G.y-a.position.y)*.06,a.lookAt(0,0,0)}function ce(s){const d=s.clientX/window.innerWidth,n=s.clientY/window.innerHeight;le.set(d,n),i.gridMat.uniforms.uMouse.value.set(d,1-n)}window.addEventListener("pointermove",ce,{passive:!0}),window.addEventListener("touchmove",s=>{if(s.touches&&s.touches.length){const d=s.touches[0];ce(d)}},{passive:!0});const ve=new Re,V=new T,Q=new T;function Oe(s){i.gridMat.uniforms.uTime.value=s;let d=w.material.envMap;return _&&d!==_.texture&&(w.material.envMap=_.texture,w.material.needsUpdate=!0),i.geometry.emailMe.position.x=i.positions.emailMe.x+(Math.sin(Math.sin(s*.15)*Math.PI*2)+.5)*p()*.5,i.geometry.emailMe.position.y=i.positions.emailMe.y+(Math.abs(Math.sin(Math.sin(s*.12)*Math.PI))+1)*x()*.24,Be(s).then(()=>{E.instanceMatrix.needsUpdate=!0,E.instanceColor.needsUpdate=!0}),Fe(O,W.geometry).then(()=>{O.attributes.position.needsUpdate=!0,W.geometry.setDrawRange(0,D),W.geometry.attributes.position.needsUpdate=!0,W.geometry.attributes.alphas.needsUpdate=!0}),new Promise(n=>{n()})}function xe(){const s=performance.now()*.001,d=ve.getElapsedTime()%120;i.time=d;const n=ve.getDelta();Oe(s).then(()=>{c.render(o,a);const h=Math.floor(d%13);h>=0&&h<=4&&ee.render(n)}),We(),requestAnimationFrame(xe)}xe();function we(){i.gridMat.uniforms.uResolution.value.set(...i.functions.computeTextureCanvasSize()),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),ee.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",we),()=>{window.removeEventListener("resize",we),window.removeEventListener("pointermove",ce),c.dispose(),i.gridGeo.dispose(),i.gridMat.dispose(),J.dispose(),O.dispose()}}return Pt(()=>{try{const f=document.getElementById("picosoft-anim"),r=Ue(f);Se("use-company-wm","true"),Tt(async()=>r&&(await r)())}catch(f){Se("use-company-wm","false"),e.value=f,console.error("!PicosoftAnim",f)}}),(f,r)=>Ut(e)?At("",!0):(Bt(),Lt("div",Vt))}};export{Jt as default};
