import Image from "next/image";
import Link from "next/link";
import React from "react";

function Cursos() {
  return (
    <div>
      <h1 className="text-center mt-12 mb-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ">
        Todas Nuestras Licencias
      </h1>
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] p-4">
          <Link href="#" className="group relative block bg-black">
            <Image
              alt=""
              src="/A11.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              width={772}
              height={1080}
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Particular
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">A1</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] p-4">
          <Link href="#" className="group relative block bg-black">
            <Image
              alt=""
              src="/A1.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              width={772}
              height={1080}
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                PARTICULAR
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">B1</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] p-4">
          <Link href="#" className="group relative block bg-black">
            <Image
              alt=""
              src="/C1.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              width={772}
              height={1080}
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Publico
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">C1</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] p-4">
          <Link href="#" className="group relative block bg-black">
            <Image
              alt=""
              src="/c2.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              width={772}
              height={1080}
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Publico
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">C2</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] p-4">
          <Link href="#" className="group relative block bg-black">
            <Image
              alt=""
              src="/D1.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              width={772}
              height={1080}
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Publico
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">D1</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
