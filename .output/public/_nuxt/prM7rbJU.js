var Xe=Object.defineProperty;var qe=(v,e,t)=>e in v?Xe(v,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):v[e]=t;var ge=(v,e,t)=>qe(v,typeof e!="symbol"?e+"":e,t);import{a as $,O as Ke,k as xe,m as ce,q as ee,U as Re,h as q,r as Je,H as Ze,N as $e,s as Pe,C as Te,l as et,t as tt,u as Me,v as st,D as it,E as at,b as ot,w as nt,x as rt,c as lt,M as ct,y as dt,z as ft,j as re,V as R,J as Se,K as ht,L as ut,X as pt,Y as gt,Z as mt,o as vt,_ as xt,$ as wt,a0 as _t,S as yt,P as bt,W as Mt,p as me,a1 as St,a2 as Ct,a3 as Dt,a4 as Et,a5 as Ce}from"./Dj-vhf08.js";import{O as Rt}from"./CsvSSBkb.js";import{r as Pt,f as Tt,l as Lt,c as At,b as Ut,e as Bt,o as zt,g as le}from"./DVFsNyW-.js";import{u as De}from"./Btskmvh6.js";const It={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class te{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nt=new Ke(-1,1,1,-1,0,1);class Ft extends xe{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}}const Gt=new Ft;class Le{constructor(e){this._mesh=new $(Gt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ht extends te{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ee?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Re.clone(e.uniforms),this.material=new ee({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Le(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ee extends te{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const h=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let m,B;this.inverse?(m=0,B=1):(m=1,B=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(h.REPLACE,h.REPLACE,h.REPLACE),c.buffers.stencil.setFunc(h.ALWAYS,m,4294967295),c.buffers.stencil.setClear(B),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(h.EQUAL,1,4294967295),c.buffers.stencil.setOp(h.KEEP,h.KEEP,h.KEEP),c.buffers.stencil.setLocked(!0)}}class Wt extends te{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new q);this._width=s.width,this._height=s.height,t=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ze}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ht(It),this.copyPass.material.blending=$e,this.clock=new Pe}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let h=0,c=this.passes.length;h<c;h++){const m=this.passes[h];if(m.enabled!==!1){if(m.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(h),m.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),m.needsSwap){if(s){const B=this.renderer.getContext(),k=this.renderer.state.buffers.stencil;k.setFunc(B.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),k.setFunc(B.EQUAL,1,4294967295)}this.swapBuffers()}Ee!==void 0&&(m instanceof Ee?s=!0:m instanceof Wt&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,h=this._height*this._pixelRatio;this.renderTarget1.setSize(s,h),this.renderTarget2.setSize(s,h);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,h)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ot extends te{constructor(e,t,s=null,h=null,c=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=h,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,s){const h=e.autoClear;e.autoClear=!1;let c,m;this.overrideMaterial!==null&&(m=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=m),e.autoClear=h}}const ve={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};class Vt extends te{constructor(e){super(),this.uniforms=Re.clone(ve.uniforms),this.material=new ee({uniforms:this.uniforms,fragmentShader:ve.fragmentShader,vertexShader:ve.vertexShader});for(const t in e)e.hasOwnProperty(t)&&this.uniforms.hasOwnProperty(t)&&(this.uniforms[t].value=e[t]);this._fsQuad=new Le(this.material)}render(e,t,s){this.material.uniforms.tDiffuse.value=s.texture,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Qt={key:0,id:"picosoft-anim",class:"fixed top-0 z-0"},Zt={__name:"PicosoftAnim",setup(v){const e=Pt(null),t={grid:{segmentsX:123,segmentsY:40},texture:{path:"/images/Picosoft-brand.png",res:new q(2906,896)},nodes:{count:423,connectionFactor:.1723,maxConnection:69,speedFast:9,speedSlow:2,getBoundingMinDist:()=>t.nodes.getBoundingMaxDist()/2,getBoundingMaxDist:()=>Math.max(50,Math.floor(window.innerWidth*.05)),section:{getWidth:()=>t.nodes.getBoundingMaxDist()*2,getHeight:()=>t.nodes.getBoundingMaxDist()*2,getDivisionsX:()=>Math.floor((Math.max(300,window.innerWidth)+2*t.nodes.section.getWidth())/t.nodes.section.getWidth()),getDivisionsY:()=>Math.floor((Math.max(600,window.innerHeight)+2*t.nodes.section.getHeight())/t.nodes.section.getHeight())}},colors:{node:9211020,line:14540253,bg:16119260}},s={};function h(d,n){const a=d.width/d.height,o=n.width/n.height;let f={x:1,y:1},S={x:0,y:0};return a>o?(f.x=o/a,S.x=(1-f.x)*.5):(f.y=a/o,S.y=(1-f.y)*.5),{scale:f,offset:S,canvasSize:d,imageSize:n}}function c(d,n,a,o,f){return d>32?o+(f-o)*((d-n)/(a-n)):d}function m(d,n,a,o,f){return o+(f-o)*((d-n)/(a-n))}function B(d,n){d.normalize(),d.multiplyScalar(n)}function k(d,n){d.length()>n&&(d.normalize(),d.multiplyScalar(n))}class Ae{constructor(n,a,o,f,S,L,A,w,C){ge(this,"boundingX");ge(this,"boundingY");this.pos=new R(n,a,o),this.dir=new R(f,S,L),this.speed=this.dir.length(),this.vel=this.dir.clone(),this.acceleration=new R,this.scale=re.randFloat(.5,1.025)+2,this.moveFn=w,this.updateFn=C,this.index=A}move(){this.moveFn&&this.moveFn(this)}update(n){this.updateFn&&n&&this.updateFn(this,n)}}async function Ue(){const n=await(await fetch("/images/glow_image.pcm")).arrayBuffer(),a=new DataView(n),o={idSize:{offset:0},imageType:{offset:1},palleteSize:{offset:2},palleteEntryDepth:{offset:4},x:{offset:6},width:{offset:8},y:{offset:10},height:{offset:12},mapType:{offset:14},colorDepth:{offset:16},descriptor:{offset:17},alpha:{offset:18},r:{offset:20},g:{offset:24},b:{offset:28}};a.getUint8(o.idSize.offset,!0),a.getUint8(o.imageType.offset,!0),a.getUint16(o.palleteSize.offset,!0),a.getUint16(o.palleteEntryDepth.offset,!0),a.getUint16(o.x.offset,!0);const f=a.getUint16(o.width.offset,!0);a.getUint16(o.y.offset,!0);const S=a.getUint16(o.height.offset,!0);a.getUint16(o.mapType.offset,!0);const L=a.getUint8(o.colorDepth.offset,!0);a.getUint8(o.descriptor.offset,!0),a.getUint16(o.alpha.offset,!0),a.getUint32(o.r.offset,!0),a.getUint32(o.g.offset,!0),a.getUint32(o.b.offset,!0);const A=1*f*S*L/8,w=o.b.offset+4,C=new Uint8Array(A/4);for(let g=0;g<C.length;g+=4)C[g+0]=c(a.getUint8(w+g),0,5e3,-255,2200),C[g+1]=c(a.getUint8(w+g+1),0,5e3,-255,2200),C[g+2]=c(a.getUint8(w+g+2),0,5e3,-255,2200),C[g+3]=a.getUint8(w+g+3);const _=new Ct(C,f,S,Dt);return _.type=Et,_.minFilter=Ce,_.magFilter=Ce,_.needsUpdate=!0,_}async function Be(){const d=s.view.scene;s.textures={};const{scale:n,canvasSize:a}=h({width:p(),height:x()},{width:3466,height:1876});s.textures.eggCo=await s.loaders.textureLoader.loadAsync(le("/assets/img/mczvc-ws.png"));const o=new me(a.width*n.x,a.height*n.y),f=new Me({map:s.textures.eggCo,transparent:!0,roughness:.9,metalness:1.8}),S=new $(o,f);S.position.set(-p()*1.25+a.width*n.x,Math.max(Math.max(x()*.8,723)-a.height*n.y,a.height*n.y-380),200),d.add(S);const{scale:L,canvasSize:A}=h({width:p()*1.7,height:x()},{width:9772,height:4167});s.textures.emailMe=await s.loaders.textureLoader.loadAsync(le("/assets/img/email-me-at.png"));const w=new me(A.width*L.x,A.height*L.y),C=new St({color:6710886,map:s.textures.emailMe}),_=new $(w,C);_.position.set(0,Math.max(x()*.8,683)-A.height*L.y,-10),d.add(_),s.geometry={...s.geometry||{},emailMe:_},s.positions={emailMe:new R().copy(_.position)};const g=s.loaders.textureLoader.load(t.texture.path);s.textures.logoTexture=g;const N=t.texture.res,[P,se]=E(),de=t.grid.segmentsX,ie=t.grid.segmentsY,ae=s.gridGeo=new me(P,se,de,ie);s.gridGeo=ae;const T=s.gridMat=new ee({vertexShader:`
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
}`,uniforms:{uTime:{value:0},uMouse:{value:new q(-1,-1)},uTexture:{value:g},uTexResolution:{value:N},uResolution:{value:new q(...E())},uGlowIntensity:{value:1.65}},side:Se,transparent:!0,depthWrite:!1});s.gridMat=T;function E(){const{scale:O,canvasSize:oe}=h({width:p()*2,height:x()},{width:N.x,height:N.y});return[oe.width*O.x,oe.height*O.y]}s.functions={computeTextureCanvasSize:E};const z=new $(ae,T);z.rotation.x=-.45,z.position.z=0,z.position.y=-x()+x()*.45,d.add(z)}const p=()=>window.innerWidth,x=()=>window.innerHeight;function ze(){const d=new yt,n=new bt(45,window.innerWidth/window.innerHeight,1,2e3),a=new Mt({antialias:!0,dithering:!1,depth:!0,depthBuffer:!0,depthSize:16}),o=new Rt(n,a.domElement);a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(t.colors.bg,1),a.state.buffers.stencil.setTest(!1);const f=a.getContext();return f.disable(f.CULL_FACE),f.clearDepth(1),f.blendFunc(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA),f.enable(f.BLEND),n.position.z=1720,{scene:d,camera:n,renderer:a,controls:o}}async function Ie(d){const n=new et;s.loaders={textureLoader:n};const{scene:a,camera:o,renderer:f,controls:S}=s.view=ze();await Be(),d.appendChild(f.domElement),S.enabled=!1,S.update();let L=new tt(18,8,150,20),A=new Me({metalness:1,roughness:0,envMapIntensity:1});const w=new $(L,A);w.position.set(-p()*.85,x()*.8,100),w.scale.multiplyScalar(4),a.add(w);const C=new st(f);C.compileEquirectangularShader(),it.onLoad=function(){C.dispose()};let _;s.textures.reflectionMapping=s.loaders.textureLoader.load(le("/assets/img/equirectangular.png"),function(r){r.mapping=at,r.colorSpace=ot,_=C.fromEquirectangular(r)}),a.background=s.loaders.textureLoader.load(le("/assets/img/about-me.jpg"));const g=new nt(16777215,p()<600?220:p()<865?p()*.35:p()*.3125);g.position.set(p(),-x()/2,70),g.castShadow=!0,g.shadow.camera.zoom=4,a.add(g);const N=new rt(16777215,1);N.power=2e3,N.position.set(0,0,1e3),o.lookAt(0,x(),0),o.add(N);const P=Math.min(t.nodes.count,Math.floor(p()*.6)),se=()=>Math.min(window.innerWidth*t.nodes.connectionFactor*.9,t.nodes.maxConnection),de=t.nodes.speedSlow,ie=new lt(2.6+(p()-1)*.0018,8,8),ae=new ct({wireframe:!0,fog:!1,color:t.colors.node}),T=new dt(ie,ae,P);a.add(T);const E=new ft,z=Array.from({length:P},(r,u)=>new Ae(Math.random()*window.innerWidth,(Math.random()-.5)*window.innerHeight*2,Math.abs(Math.random()-.6)*se(),re.randFloat(-.1,.25*Math.max(3,p()*.001)),re.randFloat(-.1,.25*Math.max(3,x()*.001)),re.randFloat(-.95,.4),u,i=>{i.dir.add(i.vel),i.dir.setLength(i.speed),i.pos.x=i.pos.x+i.dir.x,i.pos.y=i.pos.y+t.nodes.speedFast*.23*i.dir.y,i.pos.z=i.pos.z+i.dir.z,Math.abs(i.pos.x)>window.innerWidth*.8&&(i.pos.x=-p()*.25),Math.abs(i.pos.y)>x()&&(i.pos.y=-x(),i.dir.y=Math.abs(i.dir.y)*1.7),i.pos.z>150?i.dir.z=-23:i.pos.z<-60&&(i.dir.z=30)},(i,y)=>{let G=0;const b=new R,D=new R(0,0,0),l=new R;for(let M of y){const I=i.pos.distanceTo(M.pos),U=I<t.nodes.getBoundingMinDist(),H=I<t.nodes.getBoundingMaxDist();if(M!==i&&H)if(b.add(M.pos),b.sub(i.pos),l.add(M.dir),U){G++;const ue=m(I,0,Math.max(35,window.innerWidth*.1),-.01,-.001);b.multiplyScalar(ue);const X=m(I,p()*.013888889,Math.min(25,window.innerWidth*.017361111),-.01,.001);D.add(M.pos),D.add(i.pos),D.multiplyScalar(X)}else b.multiplyScalar(5e-4),l.multiplyScalar(.005)}G>0&&(b.divideScalar(G),b.sub(i.vel),D.divideScalar(G),D.sub(i.dir),k(D,i.speed*2),l.divideScalar(G),B(l,i.speed),l.sub(i.dir),k(l,i.speed)),i.acceleration.add(b),s.time>=60&&i.acceleration.add(D),s.time>=120&&i.acceleration.add(l),i.vel.add(i.acceleration),k(i.vel,i.speed),i.acceleration.multiplyScalar(0)})),O=new xe,oe=new Float32Array(P*3),Ne=new Float32Array(P);O.setAttribute("position",new ce(oe,3)),O.setAttribute("alphas",new ce(Ne,1));const F=new ee({uniforms:{colorMap:{value:await Ue()},sensitivity:{value:99/255},tint:{value:new R(14,244,251)}},vertexShader:`
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
    } `,transparent:!0,depthWrite:!1,depthTest:!1,side:Se});F.blending=ht,F.blendSrc=ut,F.blendDst=pt,F.blendEquation=gt,F.transparent=!0,F.depthFunc=mt;const V=new vt(O,F);a.add(V),z.forEach((r,u)=>{E.position.copy(r.pos),E.scale.setScalar(r.scale),E.updateMatrix(),T.setMatrixAt(u,E.matrix)}),T.instanceMatrix.needsUpdate=!0;function Fe(r){const u=V.geometry.attributes.position.array,i=V.geometry.attributes.alphas.array,y=Y.attributes.position.array,G=se();let b=0;if(z.forEach((l,M)=>{var be;if(l.move(),r<=120||r>=180){l.boundingX=Math.round(l.pos.x/t.nodes.section.getWidth())+1,l.boundingY=Math.round(l.pos.y/t.nodes.section.getHeight())+1;const W=Q.get(l.boundingX)||new Map([[l.boundingY,{nodes:[]}]]),Z=W.get(l.boundingY)||{nodes:[]};Z&&Z.nodes.push(l),W.set(l.boundingY,Z),Q.set(l.boundingX,W)}const I=l.pos,U=I.z,H=M*3;u[H+0]=l.pos.x,u[H+1]=l.pos.y,u[H+2]=l.pos.z,i[M]=(U+90)/255;const ue=l.pos;for(let W=M+1;W<P;W++){const Z=(be=z[W])==null?void 0:be.pos;K.copy(ue),J.copy(Z),K.distanceTo(J)<G&&(y[b++]=K.x,y[b++]=K.y,y[b++]=K.z,y[b++]=J.x,y[b++]=J.y,y[b++]=J.z)}Y.setDrawRange(0,b/3);const X=l.scale*.009+1.9+Math.sin(U*.1*de*.5*(9-l.speed)/((Math.PI/12-Math.PI/16)*150));E.scale.set(X,X,X),E.position.copy(I),E.updateMatrix(),T.setMatrixAt(M,E.matrix);const pe=255/(Math.sin(.1-X*(1-U*.01))*155),je=new Te(1-pe,pe,pe);T.setColorAt(M,je)}),r>120&&r<180)return new Promise(l=>{l()});const D=Math.floor(r%8);(D===0||D===1||D===3||D===4||D===6||D===7)&&Q.entries().map(([l,M])=>{M.entries().map(([I,U])=>{U.nodes&&U.nodes.forEach(H=>{H.update(U.nodes)})}).forEach(()=>{})}).forEach(()=>{});for(const[,l]of Q.entries())for(const[,M]of l.entries())M.nodes=[];return new Promise(l=>{l()})}const Q=new Map;for(let r=0;r<t.nodes.section.getDivisionsX();r++){Q.set(r,new Map);for(let u=0;u<t.nodes.section.getDivisionsY();u++){const i=t.nodes.section.getWidth(),y=t.nodes.section.getHeight();Q.get(r).set(u,{x:r*i-i,y:u*y-y,w:i,h:y,nodes:[]})}}const Ge=new xt({color:t.colors.line,transparent:!0,opacity:.6}),Y=new xe,He=new Float32Array(P*P*3);Y.setAttribute("position",new wt(He,3));const We=new _t(Y,Ge);a.add(We);const ne=s.composer=new kt(f),ke=new Ot(a,o),Oe={shape:1,radius:p()<600?1:p()<865?2:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1},Ve=new Vt(Oe);ne.addPass(ke),ne.addPass(Ve);let fe=new q(.5,.5),j=new R;function Qe(){const r=(fe.x-.5)*2,u=(fe.y-.5)*2;j.x+=(r*p()*.75-j.x)*.08,j.y+=(u*x()*.9-j.y)*.08,o.position.x+=(j.x-o.position.x)*.06,o.position.y+=(j.y-o.position.y)*.06,o.lookAt(0,0,0)}function he(r){const u=r.clientX/window.innerWidth,i=r.clientY/window.innerHeight;fe.set(u,i),s.gridMat.uniforms.uMouse.value.set(u,1-i)}window.addEventListener("pointermove",he,{passive:!0}),window.addEventListener("touchmove",r=>{if(r.touches&&r.touches.length){const u=r.touches[0];he(u)}},{passive:!0});const we=new Pe,K=new R,J=new R;function Ye(r){s.gridMat.uniforms.uTime.value=r;let u=w.material.envMap;return _&&u!==_.texture&&(w.material.envMap=_.texture,w.material.needsUpdate=!0),s.geometry.emailMe.position.x=s.positions.emailMe.x+(Math.sin(Math.sin(r*.15)*Math.PI*2)+.5)*p()*.5,s.geometry.emailMe.position.y=s.positions.emailMe.y+(Math.abs(Math.sin(Math.sin(r*.12)*Math.PI))+1)*x()*.24,Fe(r).then(()=>{T.instanceMatrix.needsUpdate=!0,T.instanceColor.needsUpdate=!0,Y.attributes.position.needsUpdate=!0,V.geometry.setDrawRange(0,P),V.geometry.attributes.position.needsUpdate=!0,V.geometry.attributes.alphas.needsUpdate=!0}),new Promise(i=>{i()})}function _e(){const r=performance.now()*.001,u=we.getElapsedTime()%120;s.time=u;const i=we.getDelta();Qe(),Ye(r).then(()=>{f.render(a,o);const y=Math.floor(u%13);y>=0&&y<=4&&ne.render(i)}),requestAnimationFrame(_e)}_e();function ye(){s.gridMat.uniforms.uResolution.value.set(...s.functions.computeTextureCanvasSize()),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight),ne.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),window.removeEventListener("pointermove",he),f.dispose(),s.gridGeo.dispose(),s.gridMat.dispose(),ie.dispose(),Y.dispose()}}return Tt(()=>{try{const d=document.getElementById("picosoft-anim"),n=Ie(d);De("use-company-wm","true"),Lt(async()=>n&&(await n)())}catch(d){De("use-company-wm","false"),e.value=d,console.error("!PicosoftAnim",d)}}),(d,n)=>Bt(e)?Ut("",!0):(zt(),At("div",Qt))}};export{Zt as default};
